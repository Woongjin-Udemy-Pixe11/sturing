import MatchingContainer from '@/components/(jonghoo)/MatchingContainer';
import { FaCheck } from 'react-icons/fa6';

export default function Type() {
  return (
    <div className="w-[37.5rem] px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-black text-headline-3">웅진님이 선호하는</h1>
        <h1 className="font-black text-headline-3">
          스터디 유형을 선택해 주세요
        </h1>
      </section>
      <section className="mt-[4rem] flex flex-col gap-[1.4rem]">
        <MatchingContainer>
          <div className="flex justify-between">
            <div>온라인 스터디</div>
            <div>
              <FaCheck />
            </div>
          </div>
        </MatchingContainer>
        <MatchingContainer>
          <div className="flex justify-between">
            <div>오프라인 스터디</div>
            <div>
              <FaCheck />
            </div>
          </div>
        </MatchingContainer>
        <MatchingContainer>
          <div className="flex justify-between">
            <div>온오프라인 스터디</div>
            <div>
              <FaCheck />
            </div>
          </div>
        </MatchingContainer>
      </section>
    </div>
  );
}