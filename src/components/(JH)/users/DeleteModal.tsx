'use client';

import { signOut } from 'next-auth/react';

export function DelteUserModal({
  id,
  show,
  onClose,
}: {
  id: any;
  show: any;
  onClose: any;
}) {
  if (!show) return null;
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
    // "fixed inset-0 bg-black bg-opacity-50 z-40" inset-0
    <div className="fixed inset-0 backdrop-blur-sm ">
      <section className="fixed  left-0 right-0 mx-auto w-[40rem] top-[30%] h-[20rem] bg-white border-gray-200 border rounded-md text-center p-10 py-[5rem]">
        <h1 className="text-headline-2 font-bold">정말 탈퇴하시겠습니까?</h1>
        <div className="flex gap-3 justify-center py-[2rem]">
          <button
            className="border border-blue-500 bg-blue-500 text-white w-[4.5rem] h-[4rem] rounded-[4px]"
            onClick={() => {
              deleteUser(id);
            }}
          >
            예
          </button>
          <button
            className="border border-blue-500 bg-white text-blue-500 w-[7.5rem] h-[4rem] rounded-[4px]"
            onClick={onClose}
          >
            아니오
          </button>
        </div>
      </section>
    </div>
  );
}

export default DelteUserModal;
