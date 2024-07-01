import { study } from '@/dummy/studyList';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import StudyStatus from './StudyStatus';
import { Study } from './UpcomingStudy';

type StudyProps = {
  studies: Study[];
};

export default function ApplicationList(props: StudyProps) {
  const { studies } = props;
  return (
    <>
      <Tabs.Root defaultValue="제출한 지원서" className="w-full py-[1.6rem]">
        <Tabs.List className="flex justify-between border-b px-[1.6rem] border-gray-300 [&>*]:text-[1.4rem]">
          <Tabs.Trigger
            value="제출한 지원서"
            className="w-[calc(50%-0.6rem)] py-[1.2rem] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            제출한 지원서 <span>{study.length}</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="받은 지원서"
            className="w-[calc(50%-0.6rem)] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            받은 지원서 <span>{study.length}</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="제출한 지원서">
          <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
            {studies &&
              studies.map((study) => (
                <div
                  key={study.studyId}
                  className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                >
                  <div className="flex justify-between mb-[0.8rem]">
                    <StudyStatus color="blue" subColor="blue">
                      지원서 수락
                    </StudyStatus>
                    <span className="text-content-2 text-main-500">
                      {study.studyFormDate}
                    </span>
                  </div>
                  <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                    <span className="text-gray-900">{study.studyType}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-700">
                      {study.studyStart}~{study.studyEnd}
                    </span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-700">{study.studyPlace}</span>
                  </div>
                  <h3 className="font-semibold text-[1.6rem] border-b border-gray-300 pb-[1.2rem] text-gray-1000 truncate">
                    {study.studyName}
                  </h3>
                  <Link href="/apply" className="w-full">
                    <button className="w-full mt-[0.8rem] px-[2rem] py-[1rem] text-content-1 text-gray-1000 font-semibold border border-gray-400 rounded-[0.5rem]">
                      지원서 보기
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </Tabs.Content>
        <Tabs.Content value="받은 지원서">
          <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
            {studies &&
              studies.map((study) => (
                <div
                  key={study.studyId}
                  className="bg-white w-full flex flex-col gap-[1.6rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                >
                  <div className="flex justify-between">
                    <StudyStatus color="red" subColor="red">
                      미열람
                    </StudyStatus>
                    <span className="text-content-2 text-main-500">
                      {study.studyFormDate}
                    </span>
                  </div>
                  <h3 className="font-semibold text-content-1 pb-[1.6rem] border-b border-gray-300 text-gray-1000 truncate">
                    {study.studyName}
                  </h3>
                  <div className="flex">
                    <div className="w-[4rem] h-[4rem] bg-main-600 rounded-full mr-[1.2rem]">
                      <img src="" alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[0.8rem] mb-[0.1rem] [&>span]:text-content-2 [&>span]:font-medium">
                        <span className="text-gray-700">UXUI 취준생</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">비기너</span>
                      </div>
                      <p className="text-content-2 text-gray-900 font-semibold">
                        안녕하세요 스터디 지원합니다.
                      </p>
                    </div>
                  </div>
                  <button className="mt-[0.8rem] px-[2rem] py-[1rem] text-content-1 text-gray-1000 font-semibold border border-gray-400 rounded-[0.5rem]">
                    지원서 보기
                  </button>
                </div>
              ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
