'use client';

import DefaultModal from '@/components/common/modal/DefaultModal';
import StudyApplyForm from '@/components/my-study-list/StudyApplyForm';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  studyId: string;
};

export default function StudyApplyClient({ studyId }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickCancel = () => {
    setIsModalOpen(true);
  };

  const onClickModalYes = () => {
    router.back();
  };

  const onClickModalNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="w-full px-[1.6rem] text-left border-b-[0.4rem] border-main-600 mb-[2.4rem] py-[1.2rem] text-gray-600 text-content-1"
        onClick={onClickCancel}
      >
        취소
      </button>
      <div className="w-full px-[1.6rem] pb-[1.6rem] flex flex-col justify-between ">
        <div className="mb-[4rem]">
          <StudyApplyForm
            heading="스터디 지원글 작성하기"
            titleLabel="지원글 제목"
            contentLabel="지원 동기"
            titlePlaceholder="스터디 모집자에게 나를 어필할 수 있는 한마디"
            contentPlaceholder="지원글을 입력해 주세요 (ex-나의 성격, 장점, 지원동기)"
            studyId={studyId}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <DefaultModal
            onConfirm={onClickModalYes}
            onCancel={onClickModalNo}
            message={`정말로 취소하시겠습니까?
              \n작성한 정보가 저장되지 않습니다.`}
          />
        </div>
      )}
    </>
  );
}
