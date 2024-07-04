'use client';

import { useState } from 'react';

//TODO: UserLabel 컴포넌트 공통화 할것인지? 안할것인지 정하기
export default function UserDetailInfo({ data }: any) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(data.users.nickname);
  const onClickEditMode = () => {
    setEditMode(!editMode);
  };
  const onChangenick = (e: any) => {
    setNickname(e.target.value);
  };

  const updatenickname = async (data: { id: string; nickname: string }) => {
    try {
      const response = await fetch('/api/mypage', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
      // console.log('Server Response:', result);
    } catch (error) {
      console.error('Error UserEdit:', error);
    }
  };
  return (
    <main>
      <h2 className="text-headline-3 font-bold mb-[2.4rem]">기본정보</h2>
      <div className="text-[1.6rem] text-gray-600 flex flex-col gap-[4.6rem]">
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label>사용자 이름</label>
          <div>{data.users.name}</div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label>로그인 이메일</label>
          <div>{data.users.email}</div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 pb-[1.2rem]">
          <label htmlFor="nick">닉네임</label>
          <div className="flex justify-between">
            <div className="text-gray-950">
              {editMode ? (
                <input
                  value={nickname}
                  onChange={(e) => {
                    onChangenick(e);
                  }}
                />
              ) : (
                `${data.users.nickname}`
              )}
            </div>
            {editMode ? (
              <div
                className="text-main-600"
                onClick={() => {
                  updatenickname({
                    id: `${data.users._id}`,
                    nickname: nickname,
                  });
                  onClickEditMode();
                }}
              >
                <button>완료</button>
              </div>
            ) : (
              <div className="text-main-600" onClick={onClickEditMode}>
                <button>수정</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
