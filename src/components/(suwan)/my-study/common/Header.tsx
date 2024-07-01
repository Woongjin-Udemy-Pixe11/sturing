'use client';
import SubHeader from '@/components/common/SubHeader';
import TabLabel from '@/components/common/Tab/TabLabel';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname=usePathname()
  console.log(pathname)
  return (
    <>
      <SubHeader isWhite={true} />
    </>
  );
}
