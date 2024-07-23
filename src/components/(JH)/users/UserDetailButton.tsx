'use client';
import { useRouter } from 'next/navigation';
import { PiCaretRightBold } from 'react-icons/pi';
export default function UserDetailButton({ id }: { id: any }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`${id}/detail`);
      }}
    >
      <PiCaretRightBold />
    </button>
  );
}
