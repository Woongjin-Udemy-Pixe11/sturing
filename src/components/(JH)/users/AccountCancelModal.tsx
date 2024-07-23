import MyPageHeader from './MypageHeader';

export default function AccountCancelMoadl() {
  return (
    <main>
      <MyPageHeader>
        <h1 className="font-bold text-headline-3">회원 탈퇴</h1>
      </MyPageHeader>
      <section className="font-bold text-headline-3 pl-[1.6rem] py-[3.1rem]">
        <h1>정말 탈퇴하시겠어요?</h1>
        <h1>탈퇴하기 전에 확인해주세요!</h1>
      </section>

      <ul className="list-disc text-gray-700 pl-[2.6rem]">
        <li className="px-[0.5rem] py-[1.5rem]">
          진행중,종료,대기중인 모든 스터디가 사라집니다.
        </li>
        <li className="px-[0.5rem] py-[1.5rem]">
          모든 스터디에서 사용자가 사라집니다.
        </li>
        <li className="px-[0.5rem] py-[1.5rem]">
          작성하신 모든 글(게시물,댓글,투두리스트)등이 전부 삭제됩니다.
        </li>
        <li className="px-[0.5rem] py-[1.5rem]">
          모든 이용내역은 삭제되며 복원이 불가능 합니다.
        </li>
        <li className="px-[0.5rem] py-[1.5rem]">
          계정이 삭제되면 복원이 불가능 합니다.
        </li>
      </ul>
      <div className="text-right">
        <button className="border text-main-600 border-main-600 px-[1.2rem] py-[0.6rem] text-content-2 rounded-[0.5rem] mt-[4rem]  ">
          회원 탈퇴하기
        </button>
      </div>
    </main>
  );
}
