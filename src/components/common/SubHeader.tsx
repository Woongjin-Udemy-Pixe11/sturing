'use client';
import { GoChevronLeft } from 'react-icons/go';
import { IoShareOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import KebabModal from './modal/KebabModal';

type TSubHeader = {
  isWhite?: boolean;
  title?: string;
  eddit?: boolean;
  share?: boolean;
  bgGray?: boolean;
  onClickEddit?: () => void;
  onClickDelete?: () => void;
};

export default function SubHeader(props: TSubHeader) {
  const { isWhite, title, eddit, share, bgGray, onClickEddit, onClickDelete } =
    props;
  const router = useRouter();

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

  const onClickBack = () => {
    router.push('./');
    router.refresh();
  };

  return (
    <>
      <div
        className={`grid grid-cols-3 items-center h-[5.4rem] px-[1rem] ${
          isWhite ? `text-white` : ''
        } ${bgGray ? 'bg-gray-100' : ''}`}
      >
        <GoChevronLeft size={28} className="" onClick={onClickBack} />
        <div className="text-headline-1 font-medium justify-self-center">
          {title}
        </div>
        <div className="justify-self-end">
          {share ? <IoShareOutline size={28} /> : ''}

          {eddit ? (
            <BsThreeDots size={28} onClick={() => setModal(!modal)} />
          ) : (
            ''
          )}
        </div>
      </div>
      {modal && (
        <div ref={modalRef} className="relative inset-0 z-10">
          <KebabModal
            eddit
            onClickEddit={onClickEddit}
            onClickDelete={onClickDelete}
          />
        </div>
      )}
    </>
  );
}
