import { useMemberStore } from '@/store/memberStore';
import { useMyStudyStore } from '@/store/myStudyStore';
import { patchMember } from '@/lib/actions/studyMainAction';
import { useEffect, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

type TMember = {
  _id: string;
  studyId: string;
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
  disabled?: boolean;
};

export default function AttendanceCheck(props: TAttendanceCheckProps) {
  const { member, updateAttendNum, disabled } = props;
  const { studyId } = useMyStudyStore();
  const { fetchMemberList } = useMemberStore();

  const [checked, setChecked] = useState(false);

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
      await patchMember(studyId, member._id, today, newCheckedState);

      fetchMemberList();
    } catch (error) {
      setChecked(!newCheckedState);
      updateAttendNum(!newCheckedState);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center space-y-[.8rem] min-w-[6.4rem] sm:w-full">
        <div className="inline-flex items-center relative">
          <input
            id={member._id}
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckbox}
            className="form-checkbox bg-gray-400 appearance-none -webkit-appearance-none
                    checked:bg-main-600 peer"
            disabled={disabled}
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
        <span className="block text-center w-full min-w-[4rem] den truncate">
          {member.userId.nickname}
        </span>
      </div>
    </>
  );
}
