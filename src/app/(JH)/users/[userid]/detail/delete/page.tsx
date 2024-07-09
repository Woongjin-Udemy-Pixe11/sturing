'use client';
import MyPageHeader from '@/components/(JH)/users/MypageHeader';
import LongButton from '@/components/common/LongButton';
import { signOut } from 'next-auth/react';

export default async function page({ params }: { params: any }) {
  const id = params.userid;
  const deleteUser = async (id: string) => {
    try {
      const response = await fetch('/api/mypage', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });
      if (!response.ok) {
        throw new Error('HTTP error!');
      }
      const result = await response.json();
      await signOut();
      console.log('Server Response', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
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
          deleteUser(id);
        }}
      >
        회원 탈퇴하기
      </LongButton>
    </main>
  );
}
