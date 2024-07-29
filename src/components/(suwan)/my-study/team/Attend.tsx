'use client';
import { useState, useEffect } from 'react';

import AttendanceCheck from './component/AttendanceCheck';
import { useMyStudyStore } from '@/store/myStudyStore';
import { useMemberStore } from '@/store/memberStore';

export default function Attend(props: any) {
  const { memberList } = useMemberStore();
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
            <h2 className="text-[1.6rem] font-semibold">출석체크 현황</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              {attendNum}/{memberList.length}
            </span>
          </div>

          <div className="w-full flex flex-row justify-between text-[1.4rem] p-[2rem]">
            {memberList.map((member: any) => (
              <AttendanceCheck
                key={member.userId._id}
                member={member}
                updateAttendNum={updateAttendNum}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
