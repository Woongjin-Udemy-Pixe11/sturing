'use client';
import KebabModal from '@/components/common/modal/KebabModal';

import { TComment } from '@/types/TStudyBoard';
import { dateCalculate } from '@/utils/my-study-main/dateCalculate';
import { useEffect, useRef, useState } from 'react';
import { MdMoreHoriz, MdMoreVert } from 'react-icons/md';

export default function Comment(props: any) {
  const { comment, onClickDelete } = props;
  const [modal, setModal] = useState(false);
  const timeAgo = dateCalculate(comment.createdAt);

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        modal &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        setModal(false);
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [modal]);

  return (
    <>
      <div className="mb-[2.4rem]">
        <div className="flex flex-row justify-start mb-[0.4rem]">
          <img
            src="/images/dummy-member-img1.png"
            width={38}
            height={38}
            alt="Picture of the user"
            className="rounded-full aspect-square object-cover"
          />
          <div className="flex flex-col pl-[0.8rem]">
            <div className="text-content-1 text-gray-900">
              {comment.userId.nickname}
            </div>
            <div className="flex flex-row text-content-2 text-gray-700 gap-x-[0.4rem]">
              <div>{}</div>
              <div>{timeAgo}</div>
            </div>
          </div>
          <button onClick={() => setModal(!modal)} className="ml-auto">
            <MdMoreVert />
          </button>
          {modal && (
            <div ref={modalRef} className="relative inset-0 z-10">
              <KebabModal onClickDelete={() => onClickDelete(comment._id)} />
            </div>
          )}
        </div>
        <div className="ml-[4.8rem]">
          <p className="text-content-1 text-gray-1000 mb-[0.4rem]">
            {comment.comment}
          </p>
          <div className="flex flex-row items-center gap-x-[0.4rem] mb-[0.4rem]">
            <div>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.74349 5.46737L8.74341 5.46736L8.74224 5.47587C8.70129 5.77275 8.76758 6.10128 8.9924 6.35461C9.19954 6.59502 9.49651 6.71919 9.80005 6.71919H12.3625C12.7258 6.71919 12.9877 6.86414 13.1204 7.05412C13.2534 7.24702 13.2947 7.50439 13.1805 7.81601L13.1776 7.82392L13.175 7.83192L11.6375 12.5132L11.6314 12.5317L11.6268 12.5507C11.5658 12.8008 11.388 13.0582 11.1222 13.2573C10.8575 13.4555 10.5403 13.5692 10.2438 13.5692H7.8063C7.64734 13.5692 7.44172 13.5409 7.25137 13.4848C7.04926 13.4254 6.92922 13.3538 6.88485 13.3094L6.8623 13.2868L6.83706 13.2673L4.9563 11.8137V6.65197L7.5836 2.74837L7.58361 2.74838L7.58581 2.74506C7.65014 2.64781 7.78804 2.53441 7.97605 2.46796C8.15969 2.40305 8.34609 2.39879 8.50005 2.45632L8.50772 2.45918L8.51549 2.4618C8.90091 2.59158 9.14632 3.03774 9.06844 3.38467L9.06479 3.40092L9.06224 3.41737L8.74349 5.46737Z"
                  fill="#4171FF"
                  stroke="#4171FF"
                />
                <path
                  d="M2.6125 4.9873H3.25625C3.69439 4.9873 3.87526 5.07554 3.9557 5.15225C4.03028 5.22339 4.11875 5.38122 4.11875 5.7873V12.0748C4.11875 12.4809 4.03028 12.6387 3.9557 12.7099C3.87526 12.7866 3.69439 12.8748 3.25625 12.8748H2.6125C2.17436 12.8748 1.99349 12.7866 1.91305 12.7099C1.83847 12.6387 1.75 12.4809 1.75 12.0748V5.7873C1.75 5.38122 1.83847 5.22339 1.91305 5.15225C1.99349 5.07554 2.17436 4.9873 2.6125 4.9873Z"
                  fill="#4171FF"
                  stroke="#4171FF"
                />
              </svg>
            </div>
            <div className="text-main-600 text-content-2">
              좋아요
              <span>{comment.likes.length > 0 && comment.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
