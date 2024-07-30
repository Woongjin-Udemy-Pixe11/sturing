'use client';
import Complete from '@/components/common/Complete';
import LongButton from '@/components/common/LongButton';
import { useRouter } from 'next/navigation';

export default function Completed() {
  const router = useRouter();
  return (
    <>
      <Complete
        heading="모집글 작성을 완료했습니다!"
        subheading={`스터디 지원자들의 지원서는
          내 스터디에서 확인하고 수락할 수 있어요.`}
      />
      <div onClick={() => router.push('/')} className="mx-[1.6rem]">
        <LongButton color="blue">확인</LongButton>
      </div>
    </>
  );
}
