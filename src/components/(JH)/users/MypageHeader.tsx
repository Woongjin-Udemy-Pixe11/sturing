'use client';
import { useRouter } from 'next/navigation';
import { GoChevronLeft } from 'react-icons/go';

export default function MyPageHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <header className="flex text-center px-[1.6rem] py-[1.6rem]">
      <GoChevronLeft size={24} onClick={() => router.back()} />
      {children && <h1 className="flex-1">{children}</h1>}
    </header>
  );
}
