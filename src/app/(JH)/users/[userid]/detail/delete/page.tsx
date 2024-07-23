'use client';
import DelteUserModal from '@/components/(JH)/users/DeleteModal';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import { useState } from 'react';

export default function page({ params }: { params: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = params.userid;

  return (
    <main>
      <DelteUserModal
        id={id}
        show={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <MyPageHeader>회원 탈퇴</MyPageHeader>
      <section className="text-headline-2 font-bold px-[1.6rem] py-[3.2rem]">
        <h1>정말 탈퇴하시겠어요?</h1>
        <h1>탈퇴하기 전에 확인해주세요!</h1>
      </section>
      <section className="px-[3rem] mb-[5rem]">
        <ul className="px-[1.2rem] list-disc text-gray-700 font-light flex flex-col gap-[2rem]">
          <li>진행중,종료,대기중인 모든 스터디가 사라집니다.</li>
          <li>모든 스터디에서 팀원 OOO님이 사라집니다.</li>
          <li>작성하신 모든 글(게시물,댓글,투두리스트)등이 전부 삭제됩니다.</li>
          <li>모든 이용내역은 삭제되며 복원이 불가능 합니다.</li>
          <li>계정이 삭제되면 복원이 불가능 합니다.</li>
        </ul>
      </section>
      <div className="w-full flex justify-end px-[2rem]">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="border-[1px] border-main-600 text-main-600 py-[0.8rem] px-[1rem] rounded-md text-bold text-content-2"
        >
          회원 탈퇴하기
        </button>
      </div>
    </main>
  );
}
