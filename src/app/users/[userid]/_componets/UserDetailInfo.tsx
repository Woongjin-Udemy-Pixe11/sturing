export default function UserDetailInfo() {
  return (
    <main>
      <h2>기본정보</h2>
      <div>
        <div className="flex flex-col">
          <label>사용자 이름</label>
          <input type="text" value="홍길동" />
        </div>
        <div className="flex flex-col">
          <label>로그인 이메일</label>
          <input type="text" />
        </div>
      </div>
    </main>
  );
}
