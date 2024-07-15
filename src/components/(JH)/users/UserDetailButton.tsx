'use client';
import LongButton from '@/components/common/LongButton';
import { useRouter } from 'next/navigation';
export default function UserDetailButton({ id }: { id: any }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`${id}/detail`);
      }}
    >
      {'>'}
    </button>
  );
}
