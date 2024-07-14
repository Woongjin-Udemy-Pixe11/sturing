'use client';
import { useState, useEffect } from 'react';

import AttendanceCheck from './component/AttendanceCheck';

const membersAttend = [
  {
    _id: '66910c9ca54aaa086d570bcd',
    studyId: '6690f2459f83f441c5237b0d',
    userId: {
      _id: '668f82e91e91188d1aed5b61',
      nickname: '스터링22870',
      image: '/images/ungin_profile.png',
    },
    attendance: [],
    studyProgress: 0,
    __v: 0,
  },
];

export default function Attend(props: any) {
  const { memberData } = props;

  const [attendNum, setAttendNum] = useState<number>(0);
  // console.log('🥶', memberData);

  const updateAttendNum = (isChecked: boolean) => {
    setAttendNum((prev) => (isChecked ? prev + 1 : prev - 1));
  };

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // 초기 출석 수 계산
    const initialAttendNum = memberData.filter((member: any) =>
      member.attendance.includes(today),
    ).length;
    setAttendNum(initialAttendNum);
  }, [memberData]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">출석체크 현황</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              {attendNum}/{memberData.length}
            </span>
          </div>

          <div className="w-full flex flex-row justify-between text-[1.4rem] p-[2rem]">
            {memberData.map((member: any) => (
              <AttendanceCheck
                key={member.id}
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
