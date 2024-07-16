import { formatDate } from '@/components/common/StudyCardList';
import * as Tabs from '@radix-ui/react-tabs';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import StudyStatus from './StudyStatus';

type ApplicationListProps = {
  userId: string;
};

async function getReceivedApplication(userId: string) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-form/other?userId=${userId}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  revalidatePath('/my-study-list');
  return res.json();
}

async function getMyApplication(userId: string) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-form/my?userId=${userId}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ApplicationList({
  userId,
}: ApplicationListProps) {
  const receive = await getReceivedApplication(userId);
  const my = await getMyApplication(userId);

  return (
    <>
      <Tabs.Root defaultValue="제출한 지원서" className="w-full py-[1.6rem]">
        <Tabs.List className="flex justify-between border-b px-[1.6rem] border-gray-300 [&>*]:text-[1.4rem]">
          <Tabs.Trigger
            value="제출한 지원서"
            className="w-[calc(50%-0.6rem)] py-[1.2rem] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            제출한 지원서 <span>{my.length}</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="받은 지원서"
            className="w-[calc(50%-0.6rem)] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            받은 지원서 <span>{receive.length}</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="제출한 지원서">
          {my.length === 0 ? (
            <div className="bg-white w-full flex flex-col gap-[0.8rem] h-[10rem] px-[2rem] py-[2.4rem] rounded-[0.8rem]">
              <p className="text-content-1 text-gray-700">
                제출한 지원서가 없습니다.
              </p>
            </div>
          ) : (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              {my &&
                my.map((study: any) => {
                  return (
                    <div
                      key={study.studyId}
                      className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                    >
                      <div className="flex justify-between mb-[0.8rem]">
                        {study.studyFormSure ? (
                          <StudyStatus color="blue" subColor="blue">
                            수락
                          </StudyStatus>
                        ) : study.studyFormRead ? (
                          <StudyStatus color="gray" subColor="gray">
                            열람
                          </StudyStatus>
                        ) : (
                          <StudyStatus color="red" subColor="red">
                            미열람
                          </StudyStatus>
                        )}
                        <span className="text-content-2 text-main-500">
                          {new Date(study.createdAt).toLocaleString()} 지원
                        </span>
                      </div>
                      <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                        <span className="text-gray-900">
                          {study.studyId?.studyType}
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-700">
                          {formatDate(study.studyId?.studyStart)}~
                          {formatDate(study.studyId?.studyEnd)}
                        </span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-700">
                          {study.studyId?.studyPlace}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[1.6rem] border-b border-gray-300 pb-[1.2rem] text-gray-1000 truncate">
                        {study.studyId?.studyName}
                      </h3>
                      <Link href={`/apply/my/${study._id}`} className="w-full">
                        <button className="w-full mt-[0.8rem] px-[2rem] py-[1rem] text-content-1 text-gray-1000 font-semibold border border-gray-400 rounded-[0.5rem]">
                          지원서 보기
                        </button>
                      </Link>
                    </div>
                  );
                })}
            </div>
          )}
        </Tabs.Content>
        <Tabs.Content value="받은 지원서">
          {receive.length === 0 ? (
            <div className="bg-white w-full flex flex-col gap-[0.8rem] h-[15rem] px-[2rem] py-[2.4rem] rounded-[0.8rem]">
              <p className="text-content-1 text-gray-700">
                받은 지원서가 없습니다.
              </p>
            </div>
          ) : (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              {receive &&
                receive.map((study: any, index: any) => (
                  <div
                    key={index}
                    className="bg-white w-full flex flex-col gap-[1.6rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                  >
                    <div className="flex justify-between">
                      {study.studyFormSure ? (
                        <StudyStatus color="blue" subColor="blue">
                          수락
                        </StudyStatus>
                      ) : study.studyFormRead ? (
                        <StudyStatus color="gray" subColor="gray">
                          열람
                        </StudyStatus>
                      ) : (
                        <StudyStatus color="red" subColor="red">
                          미열람
                        </StudyStatus>
                      )}
                      <span className="text-content-2 text-main-500">
                        {new Date(study.createdAt).toLocaleString()} 지원
                      </span>
                    </div>
                    <h3 className="font-semibold text-content-1 pb-[1.6rem] border-b border-gray-300 text-gray-1000 truncate">
                      {study.studyId?.studyName}
                    </h3>
                    <div className="flex">
                      <div className="w-[4rem] h-[4rem] rounded-full mr-[1.2rem]">
                        <img src={`${study.userId?.image}`} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[0.8rem] mb-[0.1rem] [&>span]:text-content-2 [&>span]:font-medium">
                          <span className="text-gray-700">
                            {study.userId?.nickname}
                          </span>
                          {study.userId?.matchingInfo?.level && (
                            <>
                              <span className="text-content-1 text-gray-400">
                                |
                              </span>
                              <span className="text-content-1 text-gray-600">
                                {
                                  study.userId?.matchingInfo?.level[
                                    `${study.userId.matchingInfo.interests[0]}`
                                  ]
                                }
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-content-2 text-gray-900 font-semibold">
                          {study.studyFormTitle}
                        </p>
                      </div>
                    </div>
                    <Link href={`/apply/other/${study._id}`} className="w-full">
                      <button className="w-full mt-[0.8rem] px-[2rem] py-[1rem] text-content-1 text-gray-1000 font-semibold border border-gray-400 rounded-[0.5rem]">
                        지원서 보기
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
