'use client';
import LongButton from '@/components/common/LongButton';
import DefaultModal from '@/components/common/modal/DefaultModal';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import StudyTop from '../StudyTop';

export default function OtherApplyClient({ studyForm }: { studyForm: any }) {
  const router = useRouter();
  const [isAcceptModal, setIsAcceptModal] = useState(false);
  const [isRejectModal, setIsRejectModal] = useState(false);

  const handleAcceptClick = () => {
    setIsAcceptModal(true);
  };

  const handleRejectClick = () => {
    setIsRejectModal(true);
  };

  const handleCloseModal = () => {
    setIsAcceptModal(false);
    setIsRejectModal(false);
  };

  useEffect(() => {
    const updateStudyFormRead = async () => {
      if (!studyForm.studyFormRead) {
        try {
          const response = await fetch(`/api/study-form/${studyForm._id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'view' }),
          });
          if (response.ok) {
            router.refresh();
          }
        } catch (error) {
          console.error('Error updating study form read status:', error);
        }
      }
    };

    updateStudyFormRead();
  }, [studyForm._id, studyForm.studyFormRead, router]);

  const handleAccept = async () => {
    try {
      const response = await fetch(`/api/study-form/${studyForm._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'accept' }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('지원이 수락되었습니다.');
        router.refresh();
        router.push('/my-study-list');
      } else {
        alert(data.error || '오류가 발생했습니다.');
        router.push('/my-study-list');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('오류가 발생했습니다.');
    }
    handleCloseModal();
  };

  const handleReject = async () => {
    try {
      const response = await fetch(`/api/study-form/${studyForm._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('지원이 거절되었습니다.');
        router.refresh();
        router.push('/my-study-list');
      } else {
        alert('오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('오류가 발생했습니다.');
    }
    handleCloseModal();
  };
  console.log(studyForm);

  const studyFormId = studyForm._id;
  const userId = studyForm.userId._id;
  const studyId = studyForm.studyId._id;
  const data = {
    formId: studyFormId,
    userId: userId,
    studyId: studyId,
  };
  console.log(studyFormId, userId, studyId);

  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <div>
        <StudyTop content="내가 받은 지원서" />
        <div className="flex justify-center bg-gray-100 p-[1.8rem] mb-[2.3rem]">
          <h2 className="text-content-1 text-gray-1000 font-semibold">
            {studyForm.studyId.studyName}
          </h2>
        </div>
        <div className="flex flex-col px-[1.6rem]">
          <div className="flex justify-between items-center mb-[2rem]">
            <div className="flex items-center gap-[0.8rem] overflow-hidden">
              <img
                src={studyForm.userId?.image}
                alt=""
                className="bg-gray-500 object-cover w-[4rem] h-[4rem] mr-[0.4rem] border border-gray-300 rounded-full"
              />
              <span className="text-content-1 text-gray-900 font-bold">
                {studyForm.userId.nickname}
              </span>

              {studyForm.userId?.matchingInfo?.level && (
                <>
                  <span className="text-content-1 text-gray-400">|</span>
                  <span className="text-content-1 text-gray-600">
                    {studyForm.userId?.matchingInfo?.level?.[
                      studyForm.userId.matchingInfo?.interests?.[0] ?? 'default'
                    ] ?? ''}
                  </span>
                </>
              )}
            </div>
            <div className="flex justify-center items-center gap-[0.4rem] bg-main-200 px-[0.6rem] py-[0.3rem] rounded-[0.3rem]">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.93462 12.4602C4.01063 12.2344 3.25789 11.5298 2.8499 10.4776C2.18302 8.74424 2.45069 6.07227 4.0875 4.01239C3.59986 3.7416 3.01413 3.49833 2.00663 3.25208L0.958716 2.99596L1.47263 0.893319L2.52054 1.14944C4.25 1.57214 5.0669 2.04926 5.79226 2.51545C6.87954 1.86301 8.30365 1.31577 9.76652 0.995404L10.8222 0.764293L11.2817 2.87888L10.226 3.10999C9.3182 3.30858 8.42164 3.6129 7.66055 3.97036C9.01216 5.55356 9.24961 7.79408 8.80382 9.51291C8.33031 11.3451 7.12776 12.5043 5.6662 12.5389C5.41331 12.5458 5.16899 12.5175 4.93732 12.4609L4.93462 12.4602ZM5.88068 5.23727C4.71221 6.63073 4.42002 8.53871 4.86754 9.69785C5.13319 10.3863 5.49774 10.3782 5.61814 10.3762C6.12596 10.3658 6.53157 9.66406 6.71189 8.97301C7.0269 7.75425 6.81364 6.209 5.88068 5.23727Z"
                  fill="#6284E8"
                />
              </svg>
              <span className="text-main-600 text-content-1">
                지수 {studyForm.userId.sturingPercent}%
              </span>
            </div>
          </div>
          <div className="px-[2rem] py-[2.4rem] border border-gray-300 rounded-[0.8rem] min-h-[30rem]">
            <span className="text-content-2 text-main-500">
              {new Date(studyForm.createdAt).toLocaleString('ko-KR', {
                timeZone: 'Asia/Seoul',
              })}{' '}
              지원
            </span>
            <p className="text-body-1 text-gray-900 mt-[0.8rem] mb-[2rem] pb-[2rem] border-b border-gray-300">
              {studyForm.studyFormTitle}
            </p>
            <span className="text-gray-700 text-content-1">나의 각오</span>
            <p className="text-body-2 text-gray-900 mt-[0.4rem]">
              {studyForm.studyFormContent}
            </p>
          </div>
          <p className="flex py-[0.8rem] gap-[0.4rem] justify-end items-center font-medium text-content-2 text-gray-500">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 14.25C10.9518 14.25 13.75 11.4518 13.75 8C13.75 4.54822 10.9518 1.75 7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4518 4.04822 14.25 7.5 14.25ZM7.5 15.5C11.6421 15.5 15 12.1421 15 8C15 3.85786 11.6421 0.5 7.5 0.5C3.35786 0.5 0 3.85786 0 8C0 12.1421 3.35786 15.5 7.5 15.5Z"
                fill="#CACACA"
              />
              <path
                d="M8.37264 9.87797H6.63864L6.43984 4.78613H8.5604L8.37264 9.87797ZM7.50012 12.2861C7.305 12.2861 7.1246 12.2419 6.95893 12.1535C6.79327 12.065 6.66257 11.946 6.56685 11.7963C6.47113 11.6433 6.42511 11.4766 6.42879 11.2963C6.42511 11.1195 6.47113 10.9562 6.56685 10.8065C6.66257 10.6569 6.79327 10.5378 6.95893 10.4494C7.1246 10.361 7.305 10.3167 7.50012 10.3167C7.6842 10.3167 7.85907 10.361 8.02474 10.4494C8.19041 10.5378 8.32294 10.6569 8.42234 10.8065C8.52175 10.9562 8.57145 11.1195 8.57145 11.2963C8.57145 11.4766 8.52175 11.6433 8.42234 11.7963C8.32294 11.946 8.19041 12.065 8.02474 12.1535C7.85907 12.2419 7.6842 12.2861 7.50012 12.2861Z"
                fill="#CACACA"
              />
            </svg>
            <span>지원을 취소하면 다시 복구할 수 없습니다.</span>
          </p>
        </div>
      </div>
      <div className="flex p-[1.6rem] items-end gap-[1rem]">
        <LongButton onClick={handleRejectClick} color="white">
          거절하기
        </LongButton>
        <LongButton onClick={handleAcceptClick} color="blue">
          수락하기
        </LongButton>
      </div>
      {isAcceptModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <DefaultModal
            message={`정말로 수락하시겠습니까?`}
            onConfirm={handleAccept}
            onCancel={handleCloseModal}
          />
        </div>
      )}
      {isRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <DefaultModal
            message="정말로 거절하시겠습니까?"
            onConfirm={handleReject}
            onCancel={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
}
