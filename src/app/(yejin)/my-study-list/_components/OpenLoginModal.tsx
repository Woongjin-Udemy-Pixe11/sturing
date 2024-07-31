'use client';
import LoginModal from '@/components/(jisubin)/login/LoginModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OpenLoginModal() {
  const router = useRouter();
  const onclickClose = () => {
    router.back();
  };

  return (
    <>
      <div className="fixed top-0 inset-0 bg-black bg-opacity-50 z-30"></div>
      <LoginModal onClose={onclickClose} />
    </>
  );
}
