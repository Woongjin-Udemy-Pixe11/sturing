import { TStudyInfo } from '@/types/TStudyInfo';
import { TStudyMember } from '@/types/TStudyMember';
import Image from 'next/image';

type TStudyTeamMembersProps = {
  id: string;
};

async function fetchStudyDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-detail/?id=${id}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch study detail');
  return res.json();
}

async function fetchStudyMember(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-member/?studyId=${id}`,
    {
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch team members');
  return res.json();
}

export default async function StudyTeamMembers(props: TStudyTeamMembersProps) {
  const { id } = props;
  const study: TStudyInfo = await fetchStudyDetail(id);
  const members: TStudyMember[] = await fetchStudyMember(id);

  return (
    <>
      <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <h2 className="mx-[2rem] mt-[2.4rem] pb-[1.2rem] font-medium text-gray-950">
            해당 스터디에서 원하는 팀원
          </h2>
          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
          <div className="flex flex-row mx-[2rem] gap-x-[0.4rem]">
            <div className="flex flex-row items-center py-[0.55rem] px-[0.8rem] rounded-[0.3rem] border-main-600 border-[0.1rem]">
              <span className="text-content-1 text-main-600">
                {study.studyLevel}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <h2 className="mx-[2rem] mt-[2.4rem] pb-[1.2rem] font-medium text-gray-950">
            팀원 프로필
            <span className="text-main-600 mx-[0.8rem]">
              {study.studyJoinMember}/{study.studyMember}
            </span>
          </h2>
          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
          <div className="flex flex-col mx-[2rem] gap-x-[0.4rem] gap-y-[0.4rem] text-content-1">
            {members &&
              members.map((member: any) => (
                <div className="flex flex-row items-center gap-x-[0.8rem] mb-[0.8rem]">
                  <div className="w-[3.8rem] h-[3.8rem] relative">
                    <Image
                      fill={true}
                      src={member.userId.image}
                      sizes="(max-width: 3rem), (min-height: 3rem)"
                      alt="User Image"
                      className="rounded-full border-gray-300 border-[0.1rem] object-cover"
                    />
                  </div>

                  <span>{member.userId.nickname}</span>
                  {member.userId._id == study.leaderId && (
                    <>
                      <div className="rounded-full w-[0.3rem] h-[0.3rem] bg-main-600"></div>
                      <span className="text-content-2">팀장</span>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
