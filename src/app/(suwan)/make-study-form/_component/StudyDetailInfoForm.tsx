'use client';
//TODO: 체크박스 공통스타일로 뺄것인가?
//TODO: Select 공통스타일로 뺄것인가?
import Label from '@/components/common/label/Label';
import RangeCalendar from '@/components/common/calender/RangeCalendar';
import { emojiLabelList } from '@/constant/emojiLabelList';
import SelectInput from './SelectInput';
import { useState } from 'react';
import LongButton from '@/components/common/LongButton';
import { DateRange } from 'react-day-picker';
import { differenceInDays, format, addDays } from 'date-fns';

export default function StudyDetailInfoForm(props: any) {
  const { step, setStep, study, onClickStepThree } = props;

  const [date, setDate] = useState<DateRange>();
  // const [start, setStart] = useState();
  const [meetings, setMeetings] = useState('');
  const [mood, setMood] = useState('');
  const [checked, setChecked] = useState(false);

  //TODO: any 수정
  const onChangeDate = (calendarDate: DateRange | undefined) => {
    setDate(calendarDate);
  };

  const onChangeCheckBox = () => {
    setChecked(!checked);
  };

  let data = {
    start: date?.from && format(date?.from, 'y-MM-dd'),
    end: date?.to && format(date?.to, 'y-MM-dd'),
    deadline: date?.from && format(addDays(date?.from, -3), 'y-MM-dd'),
    meetings: meetings,
    mood: mood,
  };

  console.log(data);
  const onClickMood = () => {
    console.log('');
  };
  return (
    <>
      <section className="px-[1.6rem] py-[2rem]">
        <h1 className="font-bold text-headline-3">
          스터디 상세 정보를 입력해 주세요.
        </h1>
        <article className="border-b border-gray-300">
          <h3 className="text-content-1 py-[2rem]">스터디 진행 기간</h3>
          <div className="border-gray-300 border p-[2rem] py-[1.2rem] w-full">
            <RangeCalendar onChangeDate={onChangeDate} />
          </div>

          <h2 className="text-red text-content-1 py-[3rem]">
            스터디 모집은 시작 3일 전에 자동으로 마감됩니다.
          </h2>
        </article>
        <article className="py-[3rem] border-b border-gray-300">
          <h2 className="font-bold text-content-1">스터디 진행 요일 및 시간</h2>
          <div className="flex gap-3">
            <SelectInput type="date" />
            <SelectInput type="time" />
          </div>
          <label className="inline-flex items-center space-x-2 py-[1.1rem] relative">
            <input
              id="checkbox"
              type="checkbox"
              checked={checked}
              onChange={onChangeCheckBox}
              className="form-checkbox h-[2rem] w-[2rem]  border-gray-300 border rounded-full  appearance-none checked:bg-blue-500 peer "
            />
            <label
              htmlFor="checkbox"
              className='peer-checked:after:content-["✔"]  peer-checked:after:text-white peer-checked:after:text-content-1 absolute top-[1rem] left-0'
            ></label>

            <span className="text-gray-700">추후협의</span>
          </label>
        </article>
        <article className="py-[3rem]">
          <h1 className="font-bold text-headline-3">
            스터디 분위기 키워드 (선택)
          </h1>
          <h3 className="py-[1.2rem] text-gray-500 text-content-1">
            3개까지 선택 가능합니다.
          </h3>
          <div className="flex flex-wrap gap-2 py-[1.2rem]">
            {emojiLabelList.map((label) => (
              <Label key={label.title} isBlue={false} onClick={onClickMood}>
                <img
                  src={label.imgSrc}
                  alt={label.imgAlt}
                  className="h-[3.3rem]"
                />
                <div>{label.title}</div>
              </Label>
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
        <LongButton
          color="blue"
          onClick={() => {
            setStep((prev: number) => prev + 1);
          }}
        >
          다음
        </LongButton>
      </footer>
    </>
  );
}
