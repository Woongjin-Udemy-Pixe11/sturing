'use client';
import Complete from '@/components/common/Complete';
import LongButton from '@/components/common/LongButton';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <>
      <Complete
        heading="스터디 지원을 완료했습니다!"
        subheading={`내 스터디에서 지원 스터디 수락 여부를\n 확인할 수 있어요.`}
      />
      <div className="w-full absolute bottom-0 px-[1.6rem] py-[1.2rem]">
        <LongButton onClick={goToHome} color="blue">
          확인
        </LongButton>
      </div>
    </>
  );
}
