'use client';

import SubHeader from '@/components/common/SubHeader';
import Label from '@/components/common/label/Label';
import { useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import KebabModal from '@/components/common/modal/KebabModal';
import { deleteNotice, postIcon } from '@/utils/my-study-main/fetch';
import EmojiSelectBtn from './EmojiSelectBtn';
import { useRouter } from 'next/navigation';
import { dateCalculate } from '@/utils/my-study-main/dateCalculate';
import { TBlackboard } from '@/types/TStudyBoard';

type TProps = {
  blackboard: TBlackboard;
  userId: string;
};

export default function NoticeBoardDetail(props: TProps) {
  const { blackboard, userId } = props;
  const router = useRouter();

  const title = blackboard.title;
  const content = blackboard.content;

  const timeAgo = dateCalculate(blackboard.createdAt);

  const boardType = 'notice';

  const [modal, setModal] = useState(false);

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

    // 이벤트 리스너를 document 전체에 붙여줌
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [modal]);

  const onClickEddit = () => {
    console.log('수정');
    router.push(`./${blackboard._id}/eddit`);
  };
  const onClickDelete = () => {
    console.log('삭제');
    deleteNotice(blackboard._id);
    router.push(`./`);
    router.refresh();
  };
  return (
    <>
      {userId === blackboard.writerId._id ? (
        <SubHeader eddit bgGray onClickMenu={() => setModal(!modal)} />
      ) : (
        <SubHeader />
      )}

      {modal && (
        <div
          ref={modalRef}
          className="relative inset-0 bg-black bg-opacity-50 z-10"
        >
          <KebabModal
            onClickEddit={onClickEddit}
            onClickDelete={onClickDelete}
          />
        </div>
      )}
      <div className="bg-white p-[2rem] pt-[2.5rem] h-[85vh]">
        <div className="flex justify-between items-center pb-[1.8rem] mb-[1.8rem] border-b border-gray-300">
          <div className="flex flex-grow gap-[0.8rem]">
            <div className="w-[4rem] h-[4rem]">
              <img src={blackboard.writerId.image} alt="" className="w-full" />
            </div>
            <div className="text-content-2 text-gray-700">
              <span className="flex gap-[0.4rem] items-center">
                <h3 className="text-content-1 font-semibold text-gray-900">
                  {blackboard.writerId.nickname}
                </h3>
                <p>팀장</p>
              </span>
              <span>{timeAgo}</span>
              <span> ∙ 조회 {blackboard.views}</span>
            </div>
          </div>
          <div className="shrink-0">
            <Label children={'필독'} />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-headline-3 text-gray-900">{title}</h2>
          <p className="text-content-1  text-gray-600 border-gray-300 py-[1.6rem] pb-[2.5rem]">
            {content}
          </p>
          <EmojiSelectBtn
            boardType={boardType}
            blackboardId={blackboard._id}
            userId={userId}
            icons={blackboard.icons}
          />
        </div>
      </div>
    </>
  );
}
