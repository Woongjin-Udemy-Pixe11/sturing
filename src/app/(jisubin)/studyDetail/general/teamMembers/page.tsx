import { dummyMemberInfo } from '@/dummy/memberInfo';
import Image from 'next/image';

export default function TeamMembersPage() {
  return (
    <>
      <div className="w-[34.3rem] bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <h2 className="mx-[2rem] mt-[2.4rem] pb-[1.2rem] font-semibold text-gray-950">
            해당 스터디에서 원하는 팀원
          </h2>
          <hr className="mx-[2rem] mb-[1.2rem] w-[30.3rem] border-b-gray-300 border-b-1"></hr>
          <div className="flex flex-row mx-[2rem] gap-x-[0.4rem]">
            <div className="flex flex-row items-center py-[0.55rem] px-[0.8rem] rounded-[0.3rem] border-main-600 border-[0.1rem]">
              <span className="text-content-1 text-main-600">비기너</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[34.3rem] bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <h2 className="mx-[2rem] mt-[2.4rem] pb-[1.2rem] font-semibold text-gray-950">
            팀원 프로필
            <span className="text-main-600 mx-[0.8rem]">3/4</span>
          </h2>
          <hr className="mx-[2rem] mb-[1.2rem] w-[30.3rem] border-b-gray-300 border-b-1"></hr>
          <div className="flex flex-col mx-[2rem] gap-x-[0.4rem] gap-y-[0.4rem] text-content-1">
            {dummyMemberInfo &&
              dummyMemberInfo.map((member) => (
                <div className="flex flex-row items-center gap-x-[0.8rem]">
                  <Image
                    src={member.img}
                    width={38}
                    height={38}
                    alt="User Image"
                    className="rounded-full border-gray-300 border-[0.05rem]"
                  />
                  {member.role == '팀장' ? (
                    <span className="font-semibold">{member.name}</span>
                  ) : (
                    <span>{member.name}</span>
                  )}
                  {member.role ? (
                    <>
                      <div className="rounded-full w-[0.3rem] h-[0.3rem] bg-main-600"></div>
                      <span className="text-content-2">{member.role}</span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
