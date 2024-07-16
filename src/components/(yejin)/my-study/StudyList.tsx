import { formatDate } from '@/components/common/StudyCardList';
import { TStudy } from '@/types/TStudy';
import { getSession } from '@/utils/getSessions';
import * as Tabs from '@radix-ui/react-tabs';
import StudyMember from './StudyMember';

type StudyProps = {
  activeStudies: TStudy[];
  completedStudies: TStudy[];
  params?: { studyId: string };
};
type Member = {
  _id: string;
  userId: {
    _id: string;
    nickname: string;
  };
  hasReview: boolean;
};

export default async function StudyList(props: StudyProps) {
  const session = await getSession();
  const userId = session?.user?.id;

  const { activeStudies, completedStudies, params } = props;

  const formatMeeting = (meetingString: string) => {
    if (meetingString.includes('추후협의')) {
      return '추후협의';
    }
    // 요일만 추출 (첫 번째 단어)
    return '매주 ' + meetingString.split(' ')[0];
  };

  return (
    <>
      <Tabs.Root defaultValue="진행" className="w-full py-[1.6rem]">
        <Tabs.List className="flex justify-between border-b px-[1.6rem] border-gray-300 [&>*]:text-[1.4rem]">
          <Tabs.Trigger
            value="진행"
            className="w-[calc(50%-0.6rem)] py-[1.2rem] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            진행 <span>{activeStudies.length}</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="종료"
            className="w-[calc(50%-0.6rem)] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            종료 <span>{completedStudies.length}</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="진행">
          {activeStudies.length === 0 ? (
            <div className="bg-white w-full flex flex-col gap-[0.8rem] h-[10rem] px-[2rem] py-[2.4rem] rounded-[0.8rem]">
              <p className="text-content-1 text-gray-700">
                진행중인 스터디가 없습니다.
              </p>
            </div>
          ) : (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              {activeStudies &&
                activeStudies.map((study) => (
                  <div
                    key={study.studyId}
                    className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                  >
                    <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                      <span className="text-gray-900">{study.studyType}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-700">
                        {formatDate(study.studyStart)}~
                        {formatDate(study.studyEnd)}
                      </span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-700">{study.studyPlace}</span>
                    </div>
                    <h3 className="font-semibold text-[1.6rem] border-b border-gray-400 pb-[1.6rem] mb-[0.8rem] text-gray-1000 truncate">
                      {study.studyName}
                    </h3>
                    <div className="flex justify-around bg-gray-100 px-[2.4rem] py-[0.8rem] gap-[1.6rem] [&>span]:text-content-1 rounded-[0.3rem]">
                      <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                        <img src="/images/myStudyList/studyMember.svg" alt="" />
                        팀원 {study.studyJoinMember}/{study.studyMember}명
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                        <img src="/images/myStudyList/studyDate.svg" alt="" />
                        {formatMeeting(study.studyMeetings)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Tabs.Content>
        <Tabs.Content value="종료">
          {completedStudies.length === 0 ? (
            <div className="bg-white w-full flex flex-col gap-[0.8rem] h-[10rem] px-[2rem] py-[2.4rem] rounded-[0.8rem]">
              <p className="text-content-1 text-gray-700">
                종료된 스터디가 없습니다.
              </p>
            </div>
          ) : (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              {completedStudies &&
                completedStudies.map((study) => (
                  <div
                    key={study.studyId}
                    className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                  >
                    <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                      <span className="text-gray-900">{study.studyType}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-700">
                        {formatDate(study.studyStart)}~
                        {formatDate(study.studyEnd)}
                      </span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-700">{study.studyPlace}</span>
                    </div>
                    <h3 className="font-semibold text-[1.6rem] text-gray-1000 truncate">
                      {study.studyName}
                    </h3>
                    <button className="mt-[1.2rem] px-[2rem] py-[1rem] text-content-1 text-gray-1000 font-semibold border border-gray-400 rounded-[0.5rem]">
                      강의 후기 작성하기
                    </button>
                    <span className="border-b border-gray-300 pt-[1.2rem] mb-[1.2rem]"></span>
                    {study._id && userId && (
                      <StudyMember studyId={study._id} userId={userId} />
                    )}
                  </div>
                ))}
            </div>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
