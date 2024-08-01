'use client';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import { useMemberStore } from '@/store/memberStore';
import { useMyStudyStore } from '@/store/myStudyStore';
import { useEffect, useState } from 'react';
import AttendanceCheck from './component/AttendanceCheck';

export default function Attend(props: any) {
  const { memberList } = useMemberStore();
  const { userId } = useMyStudyStore();
  const [attendNum, setAttendNum] = useState<number>(0);

  const updateAttendNum = (isChecked: boolean) => {
    setAttendNum((prev) => (isChecked ? prev + 1 : prev - 1));
  };

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // 초기 출석 수 계산
    const initialAttendNum = memberList.filter((member: any) =>
      member.attendance.includes(today),
    ).length;
    setAttendNum(initialAttendNum);
  }, [memberList]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-medium">출석체크 현황</h2>
            <span className="text-[1.4rem] font-medium text-main-600 px-[1rem]">
              {attendNum}/{memberList.length}
            </span>
          </div>

          <ScrollableContainer>
            <div className="w-full flex flex-row justify-around text-[1.4rem] gap-[1rem] py-[2rem]">
              {memberList.map((member: any) => (
                <AttendanceCheck
                  key={member.userId._id}
                  member={member}
                  updateAttendNum={updateAttendNum}
                  disabled={userId !== member.userId._id ? true : false}
                />
              ))}
            </div>
          </ScrollableContainer>
        </div>
      </div>
    </>
  );
}
