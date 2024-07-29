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
    <header className="flex items-center text-center px-[1.6rem] py-[1.4rem] border-b border-gray-200">
      <GoChevronLeft size={24} onClick={() => router.back()} />
      {children && (
        <h1 className="flex-1 font-medium text-headline-3">{children}</h1>
      )}
    </header>
  );
}
