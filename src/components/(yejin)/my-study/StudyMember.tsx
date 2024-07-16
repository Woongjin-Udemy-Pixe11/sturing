import Link from 'next/link';

// 타입 정의
type Member = {
  _id: string;
  userId: {
    _id: string;
    nickname: string;
  };
  hasReview: boolean;
};

async function getStudyMembers(
  studyId: string,
  userId: string,
): Promise<Member[]> {
  const response = await fetch(
    `${process.env.LOCAL_URL}/api/study-member?studyId=${studyId}&userId=${userId}&reviewStatus=true`,
    {
      cache: 'no-store',
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch study members');
  }

  return response.json();
}

export default async function StudyMember({
  studyId,
  userId,
}: {
  studyId: string;
  userId: string;
}) {
  const members = await getStudyMembers(studyId, userId);

  if (members.length === 0) {
    return <p className="text-content-2">스터디 멤버가 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-[2rem]">
      {members.map((member: Member) => (
        <div key={member._id} className="flex justify-between items-center">
          <span className="text-gray-900 font-semibold text-content-1">
            {member.userId?.nickname}님
          </span>
          <Link
            href={
              member.hasReview
                ? `#`
                : `/review?evaluatedUserId=${encodeURIComponent(
                    member.userId._id,
                  )}&studyId=${encodeURIComponent(studyId)}`
            }
            className={`px-[1.2rem] py-[0.4rem] border rounded-[0.5rem] ${
              member.hasReview ? 'border-gray-400' : 'border-main-600'
            }`}
          >
            <button
              className={`font-medium text-content-2 ${
                member.hasReview ? 'text-gray-700' : 'text-main-600'
              }`}
            >
              {member.hasReview ? '작성 완료' : '후기 작성'}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
