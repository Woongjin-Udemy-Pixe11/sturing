import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import { Study } from './UpcomingStudy';

type StudyProps = {
  studies: Study[];
};

export default function StudyList(props: StudyProps) {
  const { studies } = props;
  return (
    <>
      <Tabs.Root defaultValue="진행" className="w-full py-[1.6rem]">
        <Tabs.List className="flex justify-between border-b px-[1.6rem] border-gray-300 [&>*]:text-[1.4rem]">
          <Tabs.Trigger
            value="진행"
            className="w-[calc(50%-0.6rem)] py-[1.2rem] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            진행 <span>1</span>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="종료"
            className="w-[calc(50%-0.6rem)] data-[state=active]:border-b-[0.2rem] border-main-600 box-border data-[state=active]:text-main-600 data-[state=active]:font-semibold"
          >
            종료 <span>3</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="진행">
          {studies.map((study) => (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              <div className="bg-gradient-to-tr from-[#D9E3FF] to-[#FFE4E0] w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300">
                <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                  <span className="text-gray-900">{study.studyType}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-700">
                    {study.studyStart}~{study.studyEnd}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-700">{study.studyPlace}</span>
                </div>
                <h3 className="font-semibold text-[1.6rem] border-b border-gray-400 pb-[1.6rem] mb-[0.8rem] text-gray-1000 truncate">
                  {study.studyName}
                </h3>
                <div className="flex justify-around bg-gray-100 px-[2.4rem] py-[0.8rem] gap-[1.6rem] [&>span]:text-content-1 rounded-[0.3rem]">
                  <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.25 1.5C5.285 1.5 3.6875 3.0975 3.6875 5.0625C3.6875 6.99 5.195 8.55 7.16 8.6175C7.22 8.61 7.28 8.61 7.325 8.6175C7.34 8.6175 7.3475 8.6175 7.3625 8.6175C7.37 8.6175 7.37 8.6175 7.3775 8.6175C9.2975 8.55 10.805 6.99 10.8125 5.0625C10.8125 3.0975 9.215 1.5 7.25 1.5Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M11.06 10.6127C8.96747 9.21766 5.55497 9.21766 3.44747 10.6127C2.49497 11.2502 1.96997 12.1127 1.96997 13.0352C1.96997 13.9577 2.49497 14.8127 3.43997 15.4427C4.48997 16.1477 5.86997 16.5002 7.24997 16.5002C8.62997 16.5002 10.01 16.1477 11.06 15.4427C12.005 14.8052 12.53 13.9502 12.53 13.0202C12.5225 12.0977 12.005 11.2427 11.06 10.6127Z"
                        fill="#4171FF"
                      />
                      <path
                        opacity="0.4"
                        d="M15.4925 5.50507C15.6125 6.96008 14.5775 8.23507 13.145 8.40758C13.1375 8.40758 13.1375 8.40758 13.13 8.40758H13.1075C13.0625 8.40758 13.0175 8.40757 12.98 8.42257C12.2525 8.46007 11.585 8.22757 11.0825 7.80008C11.855 7.11007 12.2975 6.07507 12.2075 4.95007C12.155 4.34257 11.945 3.78757 11.63 3.31507C11.915 3.17257 12.245 3.08257 12.5825 3.05257C14.0525 2.92507 15.365 4.02007 15.4925 5.50507Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M16.9926 12.4423C16.9326 13.1698 16.4676 13.7998 15.6876 14.2273C14.9376 14.6398 13.9926 14.8348 13.0551 14.8123C13.5951 14.3248 13.9101 13.7173 13.9701 13.0723C14.0451 12.1423 13.6026 11.2498 12.7176 10.5373C12.2151 10.1398 11.6301 9.82481 10.9926 9.59231C12.6501 9.11231 14.7351 9.43481 16.0176 10.4698C16.7076 11.0248 17.0601 11.7223 16.9926 12.4423Z"
                        fill="#4171FF"
                      />
                    </svg>
                    팀원 {study.studyJoinMember}/{study.studyMember}명
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4.3125C5.6925 4.3125 5.4375 4.0575 5.4375 3.75V1.5C5.4375 1.1925 5.6925 0.9375 6 0.9375C6.3075 0.9375 6.5625 1.1925 6.5625 1.5V3.75C6.5625 4.0575 6.3075 4.3125 6 4.3125Z"
                        fill="#4171FF"
                      />
                      <path
                        d="M12 4.3125C11.6925 4.3125 11.4375 4.0575 11.4375 3.75V1.5C11.4375 1.1925 11.6925 0.9375 12 0.9375C12.3075 0.9375 12.5625 1.1925 12.5625 1.5V3.75C12.5625 4.0575 12.3075 4.3125 12 4.3125Z"
                        fill="#4171FF"
                      />
                      <path
                        opacity="0.4"
                        d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M12 8.8125H6C5.6925 8.8125 5.4375 8.5575 5.4375 8.25C5.4375 7.9425 5.6925 7.6875 6 7.6875H12C12.3075 7.6875 12.5625 7.9425 12.5625 8.25C12.5625 8.5575 12.3075 8.8125 12 8.8125Z"
                        fill="#4171FF"
                      />
                      <path
                        d="M9 12.5625H6C5.6925 12.5625 5.4375 12.3075 5.4375 12C5.4375 11.6925 5.6925 11.4375 6 11.4375H9C9.3075 11.4375 9.5625 11.6925 9.5625 12C9.5625 12.3075 9.3075 12.5625 9 12.5625Z"
                        fill="#4171FF"
                      />
                    </svg>
                    매주 일요일
                  </span>
                </div>
              </div>
              <div className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300">
                <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                  <span className="text-gray-900">{study.studyType}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-700">
                    {study.studyStart}~{study.studyEnd}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-700">{study.studyPlace}</span>
                </div>
                <h3 className="font-semibold text-[1.6rem] border-b border-gray-300 pb-[1.6rem] mb-[0.8rem] text-gray-1000 truncate">
                  {study.studyName}
                </h3>
                <div className="flex justify-around bg-gray-100 px-[2.4rem] py-[0.8rem] gap-[1.6rem] [&>span]:text-content-1 rounded-[0.3rem]">
                  <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M7.25 1.5C5.285 1.5 3.6875 3.0975 3.6875 5.0625C3.6875 6.99 5.195 8.55 7.16 8.6175C7.22 8.61 7.28 8.61 7.325 8.6175C7.34 8.6175 7.3475 8.6175 7.3625 8.6175C7.37 8.6175 7.37 8.6175 7.3775 8.6175C9.2975 8.55 10.805 6.99 10.8125 5.0625C10.8125 3.0975 9.215 1.5 7.25 1.5Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M11.06 10.6127C8.96747 9.21766 5.55497 9.21766 3.44747 10.6127C2.49497 11.2502 1.96997 12.1127 1.96997 13.0352C1.96997 13.9577 2.49497 14.8127 3.43997 15.4427C4.48997 16.1477 5.86997 16.5002 7.24997 16.5002C8.62997 16.5002 10.01 16.1477 11.06 15.4427C12.005 14.8052 12.53 13.9502 12.53 13.0202C12.5225 12.0977 12.005 11.2427 11.06 10.6127Z"
                        fill="#4171FF"
                      />
                      <path
                        opacity="0.4"
                        d="M15.4925 5.50507C15.6125 6.96008 14.5775 8.23507 13.145 8.40758C13.1375 8.40758 13.1375 8.40758 13.13 8.40758H13.1075C13.0625 8.40758 13.0175 8.40757 12.98 8.42257C12.2525 8.46007 11.585 8.22757 11.0825 7.80008C11.855 7.11007 12.2975 6.07507 12.2075 4.95007C12.155 4.34257 11.945 3.78757 11.63 3.31507C11.915 3.17257 12.245 3.08257 12.5825 3.05257C14.0525 2.92507 15.365 4.02007 15.4925 5.50507Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M16.9926 12.4423C16.9326 13.1698 16.4676 13.7998 15.6876 14.2273C14.9376 14.6398 13.9926 14.8348 13.0551 14.8123C13.5951 14.3248 13.9101 13.7173 13.9701 13.0723C14.0451 12.1423 13.6026 11.2498 12.7176 10.5373C12.2151 10.1398 11.6301 9.82481 10.9926 9.59231C12.6501 9.11231 14.7351 9.43481 16.0176 10.4698C16.7076 11.0248 17.0601 11.7223 16.9926 12.4423Z"
                        fill="#4171FF"
                      />
                    </svg>
                    팀원 {study.studyJoinMember}/{study.studyMember}명
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-1000 flex items-center gap-[0.4rem]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 4.3125C5.6925 4.3125 5.4375 4.0575 5.4375 3.75V1.5C5.4375 1.1925 5.6925 0.9375 6 0.9375C6.3075 0.9375 6.5625 1.1925 6.5625 1.5V3.75C6.5625 4.0575 6.3075 4.3125 6 4.3125Z"
                        fill="#4171FF"
                      />
                      <path
                        d="M12 4.3125C11.6925 4.3125 11.4375 4.0575 11.4375 3.75V1.5C11.4375 1.1925 11.6925 0.9375 12 0.9375C12.3075 0.9375 12.5625 1.1925 12.5625 1.5V3.75C12.5625 4.0575 12.3075 4.3125 12 4.3125Z"
                        fill="#4171FF"
                      />
                      <path
                        opacity="0.4"
                        d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                        fill="#6284E8"
                      />
                      <path
                        d="M12 8.8125H6C5.6925 8.8125 5.4375 8.5575 5.4375 8.25C5.4375 7.9425 5.6925 7.6875 6 7.6875H12C12.3075 7.6875 12.5625 7.9425 12.5625 8.25C12.5625 8.5575 12.3075 8.8125 12 8.8125Z"
                        fill="#4171FF"
                      />
                      <path
                        d="M9 12.5625H6C5.6925 12.5625 5.4375 12.3075 5.4375 12C5.4375 11.6925 5.6925 11.4375 6 11.4375H9C9.3075 11.4375 9.5625 11.6925 9.5625 12C9.5625 12.3075 9.3075 12.5625 9 12.5625Z"
                        fill="#4171FF"
                      />
                    </svg>
                    매주 일요일
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Tabs.Content>
        <Tabs.Content value="종료">
          {studies.map((study) => (
            <div className="bg-gray-100 px-[1.6rem] flex flex-col gap-[1.6rem] py-[2rem]">
              <div className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300">
                <div className="flex gap-[0.8rem] [&>span]:text-content-2 ">
                  <span className="text-gray-900">{study.studyType}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-700">
                    {study.studyStart}~{study.studyEnd}
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
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold text-content-1">
                      페퍼솔트님
                    </span>
                    <Link
                      href="../review"
                      className="px-[1.2rem] border border-main-600 rounded-[0.5rem]"
                    >
                      <button
                        type="submit"
                        className="py-[0.6rem] font-medium text-content-2 text-main-600"
                      >
                        작성 완료
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold text-content-1">
                      참치마요님
                    </span>
                    <Link
                      href="/review"
                      className="px-[1.2rem] py-[0.4rem] border border-gray-400 rounded-[0.5rem]"
                    >
                      <button className="font-medium text-content-2 text-gray-700">
                        후기 작성
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
