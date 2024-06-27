'use client';

import { useState } from 'react';

//TODO: UserLabel 컴포넌트 공통화 할것인지? 안할것인지 정하기
export default function UserDetailInfo() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const onClickEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <main>
      <h2 className="text-headline-3 font-bold mb-[2.4rem]">기본정보</h2>
      <div className="text-[1.6rem] text-gray-600 flex flex-col gap-[4.6rem]">
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label>사용자 이름</label>
          <div>홍길동</div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label>로그인 이메일</label>
          <div>kafmjh12@gmail.com</div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label htmlFor="nick">닉네임</label>
          <div className="flex justify-between">
            <div className="text-gray-950">{editMode ? <input /> : '웅진'}</div>
            <div className="text-main-600" onClick={onClickEditMode}>
              {editMode ? <button>완료</button> : <button>수정</button>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
