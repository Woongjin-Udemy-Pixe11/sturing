import { useEffect, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

type TMember = {
  _id: string;
  attendance: string[];
  studyProgress: number;
  userId: {
    _id: string;
    nickname: string;
    image: string;
  };
};

type TAttendanceCheckProps = {
  member: TMember;
  updateAttendNum: (isChecked: boolean) => void;
};

export default function AttendanceCheck(props: TAttendanceCheckProps) {
  const { member, updateAttendNum } = props;

  const [checked, setChecked] = useState(false);

  //   console.log('🤢', member.attendance);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (member.attendance.includes(today)) {
      setChecked(true);
    }
  }, [member.attendance]);

  const onChangeCheckbox = async () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    updateAttendNum(newCheckedState);

    try {
      const response = await fetch(`/api/study-member?id=${member._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ today: today, attended: newCheckedState }),
      });

      if (!response.ok) {
        throw new Error('Failed to update attendance');
      }
    } catch (error) {
      console.error('Error updating attendance:', error);
      // 에러 발생 시 체크박스 상태를 원래대로 되돌립니다.
      setChecked(!newCheckedState);
      updateAttendNum(!newCheckedState);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-[.8rem]">
        <div className="inline-flex items-center relative">
          <input
            id={member._id}
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckbox}
            className="form-checkbox bg-gray-400 appearance-none
                    checked:bg-main-600 peer"
          />
          <label htmlFor={member._id} className="">
            <FaCircleCheck
              size={20}
              color={
                checked ? `rgba(65, 113, 255, 1)` : 'rgba(227, 227, 227, 1)'
              }
            />
          </label>
        </div>
        <span className="text-content-1 text-semibold">
          {member.userId.nickname}
        </span>
      </div>
    </>
  );
}
