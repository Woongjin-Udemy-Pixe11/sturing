'use client';
import { useState } from 'react';

type TStudyFormProps = {
  titlePlaceholder: string;
  contentPlaceholder: string;
  titleMaxLength?: number;
  contentMaxLength?: number;
  heading: string;
  titleLabel: string;
  contentLabel: string;
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
  } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="w-full">
      <h1 className="font-semibold text-[2.0rem] tracking-[-0.03rem] text-gray-1000 mb-[2.0rem]">
        {heading}
      </h1>
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
    </div>
  );
}
