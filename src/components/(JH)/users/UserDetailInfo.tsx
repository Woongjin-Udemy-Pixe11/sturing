'use client';

import { updatenickname } from '@/utils/updateNicname';
import { useState } from 'react';

export default function UserDetailInfo({ data }: any) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(data.users.nickname);

  const onClickEditMode = () => {
    setEditMode(!editMode);
  };

  const onChangenick = (e: any) => {
    setNickname(e.target.value);
  };

  const handleUpdateNickname = async () => {
    // Optimistically update the nickname
    setNickname(nickname);
    onClickEditMode();

    try {
      await updatenickname({
        id: `${data.users._id}`,
        nickname: nickname,
      });
    } catch (error) {
      // Revert to the previous nickname if the update fails
      setNickname(data.users.nickname);
      console.error('Failed to update nickname:', error);
    }
  };

  return (
    <main className="px-[1.6rem]">
      <h2 className="text-headline-3 font-bold mb-[2.4rem]">기본정보</h2>
      <div className="text-[1.6rem] text-gray-600 flex flex-col gap-[4.6rem]">
        <div className="flex flex-col gap-3 border-b border-gray-300 pb-[1.4rem]">
          <label className="text-content-1">사용자 이름</label>
          <div>{data.users.name}</div>
        </div>
        <div className="flex flex-col gap-3 border-b border-gray-300 pb-[1.4rem]">
          <label className="text-content-1">로그인 이메일</label>
          <div>{data.users.email}</div>
        </div>
        <div className="flex flex-col gap-3 border-b border-gray-300 pb-[1.4rem]">
          <label htmlFor="nick" className="text-content-1">
            닉네임
          </label>
          <div className="flex justify-between">
            <div className="text-gray-950">
              {editMode ? (
                <input value={nickname} onChange={(e) => onChangenick(e)} />
              ) : (
                <div>{nickname}</div>
              )}
            </div>
            {editMode ? (
              <div className="text-main-600" onClick={handleUpdateNickname}>
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
