'use client';
//TODO: 체크박스 공통스타일로 뺄것인가?
//TODO: Select 공통스타일로 뺄것인가?
import SizeUpLabel from '@/components/common/label/SizeUpLabel';
import LongButton from '@/components/common/LongButton';
import { emojiLabelList } from '@/constant/emojiLabelList';
import { addDays, format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { FiCheck } from 'react-icons/fi';
import Calendar from './Calendar';
import SelectInput from './SelectInput';

export default function StudyDetailInfoForm(props: any) {
  const { step, setStep, study, onClickStepThree } = props;

  const [date, setDate] = useState<DateRange>();
  const [meetingDay, setMeetingDay] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetings, setMeetings] = useState('');

  const [mood, setMood] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  let disabledDay = addDays(new Date(), 3);

  let data = {
    start: date?.from && format(date?.from, 'y-MM-dd'),
    end: date?.to && format(date?.to, 'y-MM-dd'),
    deadline: date?.from && format(addDays(date?.from, -3), 'y-MM-dd'),
    meetings: meetings,
    mood: mood,
  };
  console.log(date);

  const validate = useMemo(() => {
    return date == undefined || meetings == '' || mood.length == 0;
  }, [date, meetings, mood]);

  useEffect(() => {
    if (checked) {
      setMeetings('추후협의');
    } else if (meetingDay && meetingTime) {
      setMeetings(`${meetingDay} ${meetingTime}`);
    } else {
      setMeetings('');
    }
  }, [meetingDay, meetingTime, checked]);

  const onChangeDate = (calendarDate: DateRange | undefined) => {
    setDate(calendarDate);
  };

  const onChangeCheckBox = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    if (newCheckedState) {
      setMeetingDay('추후협의');
    } else {
      setMeetingDay('');
    }
  };

  const onClickMood = (title: string) => {
    if (mood.includes(title)) {
      setMood(mood.filter((item) => item !== title));
    } else if (mood.length < 3) {
      setMood([...mood, title]);
    }
  };

  const onClickNext = () => {
    onClickStepThree(data);
  };
  return (
    <>
      <section className="px-[1.6rem] py-[2rem] overflow-auto">
        <h1 className="font-semibold text-headline-3">
          스터디 상세 정보를 입력해 주세요.
        </h1>
        <article className="border-b border-gray-300">
          <h3 className="text-content-1 py-[2rem]">스터디 진행 기간</h3>
          <div className="border-gray-300 border p-[2rem] py-[1.2rem] w-full">
            <Calendar onChangeDate={onChangeDate} disabledDay={disabledDay} />
          </div>

          <h2 className="text-red text-content-1 py-[3rem]">
            스터디 모집은 시작 3일 전에 자동으로 마감됩니다.
          </h2>
        </article>
        <article className="py-[3rem] border-b border-gray-300">
          <h2 className="font-semibold text-content-1">
            스터디 진행 요일 및 시간
          </h2>
          <div className="flex gap-3 mt-[1rem]">
            <SelectInput
              type="date"
              onChange={setMeetingDay}
              value={meetingDay}
              checked={checked}
            />
            <SelectInput
              type="time"
              onChange={setMeetingTime}
              value={meetingTime}
              checked={checked}
            />
          </div>
          <label className="inline-flex items-center space-x-2 py-[1.2rem] relative">
            <input
              id="checkbox"
              type="checkbox"
              checked={checked}
              onChange={onChangeCheckBox}
              className="form-checkbox h-[1.8rem] w-[1.8rem] bg-gray-400 rounded-full  appearance-none checked:bg-main-600 peer "
            />
            <label
              htmlFor="checkbox"
              className="absolute text-white text-content-2 top-1/2 left-[-2%] transform -translate-y-1/2"
            >
              <FiCheck />
            </label>

            <span className="text-gray-600 text-content-1 text-ge">
              추후협의
            </span>
          </label>
        </article>
        <article className="py-[3rem]">
          <h1 className="font-semibold text-headline-3">
            스터디 분위기 키워드 (선택)
          </h1>
          <h3 className="py-[1.2rem] text-gray-500 text-content-1">
            3개까지 선택 가능합니다.
          </h3>
          <div className="flex flex-wrap gap-2 py-[1.2rem]">
            {emojiLabelList.map((label) => (
              <SizeUpLabel
                key={label.title}
                isClicked={mood.includes(label.title) ? true : false}
                onClick={() => onClickMood(label.title)}
              >
                <img
                  src={label.imgSrc}
                  alt={label.imgAlt}
                  className="h-[1.6rem] mr-[.5rem]"
                />
                <div>{label.title}</div>
              </SizeUpLabel>
            ))}
          </div>
        </article>
      </section>
      <footer className="flex m-auto gap-2 w-full p-4 py-[2rem]">
        <LongButton
          color="white"
          className="w-[40%]"
          onClick={() => {
            setStep((prev: number) => prev - 1);
          }}
        >
          이전
        </LongButton>

        {validate ? (
          <LongButton color="gray">다음</LongButton>
        ) : (
          <LongButton
            color="blue"
            onClick={() => {
              onClickNext();
              setStep((prev: number) => prev + 1);
            }}
          >
            다음
          </LongButton>
        )}
      </footer>
    </>
  );
}
