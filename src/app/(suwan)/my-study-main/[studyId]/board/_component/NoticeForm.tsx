'use client';
import LongButton from '@/components/common/LongButton';
import supabase from '@/lib/supabaseClient';
import { TFormData } from '@/types/TStudyBoard';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { useFormStatus } from 'react-dom';

type NoticeFormProps = {
  boardType?: string;
  studyId: string;
  handleSubmit: (
    data: TFormData,
  ) => Promise<{ blackboardId?: string; error?: string }>;
  imageUpload?: boolean;
  heading?: string;
  defaultTitle?: string;
  defaultContent?: string;
  defaultImage?: string;
  contentMaxLength?: number;
  onImageChange?: (file: File | null) => void;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <LongButton color="blue" disabled={pending}>
      {pending ? '제출 중...' : '등록하기'}
    </LongButton>
  );
}

export default function NoticeForm(props: NoticeFormProps) {
  const {
    boardType,
    studyId,
    handleSubmit,
    imageUpload,
    heading,
    defaultTitle,
    defaultContent,
    defaultImage,
    contentMaxLength,
    onImageChange,
  } = props;
  const router = useRouter();
  const { pending } = useFormStatus();

  const [title, setTitle] = useState(defaultTitle ? defaultTitle : '');
  const [content, setContent] = useState(defaultContent ? defaultContent : '');
  const [selectedImg, setSelectedImg] = useState<string | null>(
    defaultImage ? defaultImage : null,
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    defaultImage ? defaultImage : null,
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file: any = e.target.files[0];
      setSelectedImg(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setSelectedImg(null);
    setPreviewUrl(null);
    if (onImageChange) {
      onImageChange(null);
    }
  };

  const validate = useMemo(() => {
    return title == '' || content == '';
  }, [title, content]);

  const onSubmit = async (formData: FormData) => {
    try {
      const title = formData.get('title') as string;
      const content = formData.get('content') as string;
      let img;

      if (selectedImg !== null) {
        if (selectedImg !== defaultImage) {
          const fileName = `${Date.now()}-${Math.random()}`;
          const { data, error } = await supabase.storage
            .from('images')
            .upload(fileName, selectedImg);
          const url: any = supabase.storage
            .from('images')
            .getPublicUrl(fileName);
          img = url.data.publicUrl;
          setPreviewUrl(url.data.publicUrl);
        }
      } else {
        img = selectedImg;
      }
      const board = boardType == 'notice' ? 'notice-board' : 'task-board';
      const result = await handleSubmit({ title, content, img });
      if (result.blackboardId) {
        router.replace(
          `/my-study-main/${studyId}/board/${board}/${result.blackboardId}`,
        );
        router.refresh();
      } else if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('제출 중 오류 발생:', error);
    }
  };

  return (
    <>
      <form action={onSubmit}>
        <h1 className="font-medium text-[2.0rem] tracking-[-0.03rem] text-gray-1000 mb-[2.0rem]">
          {heading}
        </h1>
        {imageUpload && (
          <div className="w-full mb-[1.6rem]">
            <label
              htmlFor="image-upload"
              className="font-medium text-content-1 mb-[1.2rem] text-gray-900 block"
            >
              {}
            </label>
            <div className="flex items-center gap-[1.2rem]">
              <div className="relative">
                <input
                  type="file"
                  name="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-[7rem] h-[7rem] border border-gray-300 flex items-center justify-center rounded-[0.5rem]">
                  <img src="/images/form/insert-image.svg" />
                </div>
              </div>
              {previewUrl && (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-[7rem] h-[7rem] object-cover rounded-[0.5rem]"
                  />
                  <button
                    onClick={handleImageRemove}
                    className="absolute top-[-8%] right-[-10%] bg-black text-white rounded-full w-[2rem] h-[2rem] p-[0.3rem] flex items-center justify-center"
                  >
                    <CgClose />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col items-start">
          <div className="w-full flex flex-col">
            <label
              htmlFor="title"
              className="font-medium text-content-1 mb-[1.2rem] text-gray-900"
            >
              글 제목
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={50}
              placeholder="제목을 입력해 주세요"
              className="w-full px-[1.6rem] py-[1.2rem] border border-gray-300 rounded-[0.5rem] placeholder:text-gray-600 placeholder:text-content-1"
            />
            <div className="flex justify-end w-full text-content-2 mt-[0.8rem] mb-[0.4rem]">
              <span className="text-gray-900">{title.length}</span>
              <span className="text-gray-400">/50</span>
            </div>
          </div>

          <div className="w-full flex flex-col items-start">
            <label
              htmlFor="content"
              className="font-medium text-content-1 mb-[1.2rem] text-gray-900"
            >
              내용
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={contentMaxLength}
              placeholder="내용을 입력해 주세요"
              className="w-full h-[23rem] px-[1.6rem] py-[1.2rem] p-3 border border-gray-300 rounded-[0.5rem] text-gray-900 placeholder:text-gray-600 placeholder:text-content-1"
              rows={6}
            />
            <div className="flex justify-end w-full text-content-2 mt-[0.8rem] mb-[0.4rem]">
              <span className="text-gray-900">{content.length}</span>

              <span className="text-gray-400">/{contentMaxLength}</span>
            </div>
          </div>
        </div>

        {validate ? (
          <LongButton color="gray" className="pointer-events-none">
            등록하기
          </LongButton>
        ) : (
          <SubmitButton />
        )}
      </form>
    </>
  );
}
