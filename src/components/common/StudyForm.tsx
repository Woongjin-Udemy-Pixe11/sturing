'use client';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

type TStudyFormProps = {
  titlePlaceholder: string;
  contentPlaceholder: string;
  titleMaxLength?: number;
  contentMaxLength?: number;
  heading: string;
  titleLabel: string;
  contentLabel: string;
  imageUpload?: boolean;
  imageLabel?: string;
  onImageChange?: (file: File | null) => void;
};

export default function StudyForm(props: TStudyFormProps) {
  const {
    titlePlaceholder,
    contentPlaceholder,
    titleMaxLength = 24,
    contentMaxLength = 500,
    heading,
    titleLabel,
    contentLabel,
    imageUpload = false,
    imageLabel = '이미지 업로드',
    onImageChange,
  } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }

    if (onImageChange) {
      onImageChange(file);
    }
  };

  const handleImageRemove = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (onImageChange) {
      onImageChange(null);
    }
  };

  return (
    <form className="w-full">
      <h1 className="font-semibold text-[2.0rem] tracking-[-0.03rem] text-gray-1000 mb-[2.0rem]">
        {heading}
      </h1>
      {imageUpload && (
        <div className="w-full mb-[1.6rem]">
          <label
            htmlFor="image-upload"
            className="font-medium text-content-1 mb-[1.2rem] text-gray-900 block"
          >
            {imageLabel}
          </label>
          <div className="flex items-center gap-[1.2rem]">
            <div className="relative">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-[7rem] h-[7rem] border border-gray-300 flex items-center justify-center rounded-[0.5rem]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.368 7.63103C21.6189 7.63103 20.9312 7.20121 20.5873 6.53805L19.7031 4.75735C19.1382 3.6398 17.6645 2.71875 16.4119 2.71875H13.5996C12.3347 2.71875 10.861 3.6398 10.2961 4.75735L9.41188 6.53805C9.06802 7.20121 8.3803 7.63103 7.63118 7.63103C4.96626 7.63103 2.85398 9.8784 3.02591 12.531L3.66451 22.6749C3.81188 25.2047 5.17504 27.2802 8.56451 27.2802H21.4347C24.8242 27.2802 26.175 25.2047 26.3347 22.6749L26.9733 12.531C27.1452 9.8784 25.0329 7.63103 22.368 7.63103ZM13.1575 9.16612H16.8417C17.3452 9.16612 17.7628 9.58366 17.7628 10.0872C17.7628 10.5907 17.3452 11.0082 16.8417 11.0082H13.1575C12.654 11.0082 12.2364 10.5907 12.2364 10.0872C12.2364 9.58366 12.654 9.16612 13.1575 9.16612ZM14.9996 22.5152C12.7154 22.5152 10.8487 20.6609 10.8487 18.3644C10.8487 16.0679 12.7031 14.2135 14.9996 14.2135C17.2961 14.2135 19.1505 16.0679 19.1505 18.3644C19.1505 20.6609 17.2838 22.5152 14.9996 22.5152Z"
                    fill="#B5B5B5"
                  />
                </svg>
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
            {titleLabel}
          </label>
          <input
            type="text"
            id="title"
            maxLength={titleMaxLength}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={titlePlaceholder}
            className="w-full px-[1.6rem] py-[1.2rem] border border-gray-300 rounded-[0.5rem] placeholder:text-gray-600 placeholder:text-content-1"
          />
          <div className="flex justify-end w-full text-content-2 mt-[0.8rem] mb-[0.4rem]">
            <span className="text-gray-900">{title.length}</span>
            <span className="text-gray-400">/{titleMaxLength}</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start">
          <label
            htmlFor="content"
            className="font-medium text-content-1 mb-[1.2rem] text-gray-900"
          >
            {contentLabel}
          </label>
          <textarea
            id="content"
            maxLength={contentMaxLength}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={contentPlaceholder}
            className="w-full h-[23rem] px-[1.6rem] py-[1.2rem] p-3 border border-gray-300 rounded-[0.5rem] text-gray-900 placeholder:text-gray-600 placeholder:text-content-1"
            rows={6}
          />
          <div className="flex justify-end w-full text-content-2 mt-[0.8rem] mb-[0.4rem]">
            <span className="text-gray-900">{content.length}</span>
            <span className="text-gray-400">/{contentMaxLength}</span>
          </div>
        </div>
      </div>
    </form>
  );
}
