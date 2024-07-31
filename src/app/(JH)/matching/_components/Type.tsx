import MatchingContainer from '@/components/(JH)/matching/MatchingContainer';
import { FaCheck } from 'react-icons/fa6';

type Ttype = {
  studyType: string;
  onClickStudyType: (field: string) => void;
  nickname: string;
};

export default function Type(props: Ttype) {
  const { studyType, onClickStudyType, nickname } = props;
  return (
    <div className="w-full px-[1.4rem] h-">
      <section className="py-[2rem] ">
        <h1 className="font-semibold text-headline-3">
          {nickname}님이 선호하는
        </h1>
        <h1 className="font-semibold text-headline-3">
          스터디 유형을 선택해 주세요
        </h1>
      </section>
      <section className="mt-[4rem] flex flex-col h-[50vh]">
        <MatchingContainer
          onClick={() => {
            onClickStudyType('온라인');
          }}
          active={studyType === '온라인' && true}
        >
          <div className="flex justify-between">
            <div>온라인 스터디</div>
            <div>
              <FaCheck />
            </div>
          </div>
        </MatchingContainer>
        <MatchingContainer
          onClick={() => {
            onClickStudyType('오프라인');
          }}
          active={studyType === '오프라인' && true}
        >
          <div className="flex justify-between">
            <div>오프라인 스터디</div>
            <div>
              <FaCheck />
            </div>
          </div>
        </MatchingContainer>
        <MatchingContainer
          onClick={() => {
            onClickStudyType('상관없음');
          }}
          active={studyType === '상관없음' && true}
        >
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
