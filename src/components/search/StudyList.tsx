'use client';
import Link from 'next/link';

import { TStudyInfo } from '@/types/TStudyInfo';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import GrayFullLink from './GrayFullLink';
const Card = dynamic(() => import('@/components/common/Card'));
type TStudyListProps = {
  isDetail?: boolean;
  data?: TStudyInfo[];
  limit?: number;
  keyword?: string;
  filters?: any;
  userId: string;
};
//TODO:filter타입이뭔지모르겠다.

export default function StudyList(props: TStudyListProps) {
  const { isDetail, data, limit, keyword, filters, userId } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  let isFull = false;
  let cardList = data || [];

  if (!isDetail && limit) {
    isFull = cardList.length > limit;
    cardList = cardList.slice(0, limit);
  }

  const handleViewAllStudies = () => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('tab', '스터디');
    return `/search/result?${currentParams.toString()}`;
  };

  return (
    <>
      <div>
        {!isDetail && (
          <span className="block text-headline-3 font-medium pt-[2rem]">
            스터디
          </span>
        )}
        <ul className="w-full grid grid-cols-2 justify-stretch items-start flex-wrap gap-x-[1.6rem] gap-y-[1.6rem] py-[2rem]">
          {cardList && cardList.length > 0 ? (
            cardList.map((card: any) => (
              <Link href={`/study-detail/${card._id}`} key={card._id}>
                <Card
                  key={card.id}
                  userId={userId}
                  studyId={card._id}
                  studyImage={card.studyImage}
                  studyMeetings={card.studyMeetings}
                  studyType={card.studyType}
                  studyCategory={card.studyCategory}
                  studyName={card.studyName}
                  studyStart={card.studyStart}
                  studyEnd={card.studyEnd}
                  studyPlace={card.studyPlace}
                  studyJoinMember={card.studyJoinMember}
                  studyMember={card.studyMember}
                />
              </Link>
            ))
          ) : (
            <div>검색결과가 없습니다!</div>
          )}
        </ul>
        {isFull && (
          <GrayFullLink
            content="스터디 전체보기"
            moveLink={handleViewAllStudies()}
          />
        )}
      </div>
    </>
  );
}
