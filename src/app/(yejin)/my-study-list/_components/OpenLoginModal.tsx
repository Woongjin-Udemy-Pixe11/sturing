'use client';
import LoginModal from '@/components/(jisubin)/login/LoginModal';
import { useState } from 'react';

export default function OpenLoginModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onClickLogin = () => {
    setIsOpenModal(!isOpenModal);
    if (!isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
      <LoginModal onClose={onClickLogin} />
    </>
  );
}
