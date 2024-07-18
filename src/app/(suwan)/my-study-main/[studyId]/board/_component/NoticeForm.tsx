'use client';
import LongButton from '@/components/common/LongButton';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type NoticeFormProps = {
  studyId: string;
  handleSubmit: (
    formData: FormData,
  ) => Promise<{ noticeId?: string; error?: string }>;
  defaultTitle?: string;
  defaultContent?: string;
};

export default function NoticeForm(props: NoticeFormProps) {
  const { studyId, handleSubmit, defaultTitle, defaultContent } = props;
  const router = useRouter();

  const [title, setTitle] = useState(defaultTitle ? defaultTitle : '');
  const [content, setContent] = useState(defaultContent ? defaultContent : '');

  const validate = useMemo(() => {
    return title == '' || content == '';
  }, [title, content]);

  const onSubmit = async (formData: FormData) => {
    const result = await handleSubmit(formData);
    if (result.noticeId) {
      router.push(
        `/my-study-main/${studyId}/board/notice-board/${result.noticeId}`,
      );
    } else if (result.error) {
      // 에러 처리
      console.error(result.error);
    }
  };
  return (
    <>
      <form action={onSubmit}>
        <h1 className="font-semibold text-[2.0rem] tracking-[-0.03rem] text-gray-1000 mb-[2.0rem]">
          공지 작성
        </h1>
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
              maxLength={500}
              placeholder="내용을 입력해 주세요"
              className="w-full h-[23rem] px-[1.6rem] py-[1.2rem] p-3 border border-gray-300 rounded-[0.5rem] text-gray-900 placeholder:text-gray-600 placeholder:text-content-1"
              rows={6}
            />
            <div className="flex justify-end w-full text-content-2 mt-[0.8rem] mb-[0.4rem]">
              <span className="text-gray-900">0</span>

              <span className="text-gray-400">/500</span>
            </div>
          </div>
        </div>

        {validate ? (
          <LongButton color="gray" className="pointer-events-none">
            등록하기
          </LongButton>
        ) : (
          <LongButton className={'mt-[4rem]'} color="blue">
            등록하기
          </LongButton>
        )}
      </form>
    </>
  );
}
