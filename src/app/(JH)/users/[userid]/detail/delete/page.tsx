'use client';
import DelteUserModal from '@/components/(JH)/users/DeleteModal';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import LongButton from '@/components/common/LongButton';
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
      <section className="text-headline-2 font-bold px-[1.6rem] py-[3.1rem]">
        <h1>정말 탈퇴하시겠어요?</h1>
        <h1>탈퇴하기 전에 확인해주세요!</h1>
      </section>
      <section className="px-[1.6rem] py-[2.4rem]">
        <ul className="list-disc text-gray-800 body-1 flex flex-col gap-3">
          <li>진행중,종료,대기중인 모든 스터디가 사라집니다.</li>
          <li>모든 스터디에서 팀원 OOO님이 사라집니다.</li>
          <li>작성하신 모든 글(게시물,댓글,투두리스트)등이 전부 삭제됩니다.</li>
          <li>모든 이용내역은 삭제되며 복원이 불가능 합니다.</li>
          <li>계정이 삭제되면 복원이 불가능 합니다.</li>
        </ul>
      </section>

      <LongButton
        color="gray"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        회원 탈퇴하기
      </LongButton>
    </main>
  );
}
