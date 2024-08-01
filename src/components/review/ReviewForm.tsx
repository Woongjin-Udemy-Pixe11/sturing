import { getSession } from '@/utils/getSessions';
import ReviewFormClient from './ReviewFormClient';

export type TReviewProps = {
  evaluatedUser?: {
    id: string;
    nickname: string;
    image: string;
    studyName: string;
  };
  userId?: string;
  studyId?: string | undefined;
};

async function getEvaluatedUser(evaluatedUserId?: string, studyId?: string) {
  const response = await fetch(
    `${process.env.LOCAL_URL}/api/study-review?evaluatedUserId=${evaluatedUserId}&studyId=${studyId}`,
    { cache: 'no-store' },
  );
  if (!response.ok) {
    throw new Error('사용자 데이터를 가져오는 데 실패했습니다');
  }
  return response.json();
}

export default async function ReviewForm({
  searchParams = {},
}: {
  searchParams?: { evaluatedUserId?: string; studyId?: string };
}) {
  const session = await getSession();
  const userId = session?.user?.id;
  const evaluatedUserId = searchParams.evaluatedUserId;
  const studyId = searchParams.studyId;

  const evaluatedUser = await getEvaluatedUser(evaluatedUserId, studyId);
  return (
    <ReviewFormClient
      evaluatedUser={evaluatedUser}
      studyId={studyId}
      userId={userId}
    />
  );
}
