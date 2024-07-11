import Label from '@/components/common/label/Label';
import CourseLink from '../../../common/CourseLink';
import {
  differenceInDays,
  format,
  intervalToDuration,
  daysToWeeks,
} from 'date-fns';
import { ko } from 'date-fns/locale';

export default function StudyInfo({ data }: any) {
  // console.log('data', data);

  const NAME = data.studyName;
  const TYPE = data.studyType;
  const LECTURE = data.studyLecture;
  const START = format(data.studyStart, 'y.MM.dd(EEE)', { locale: ko });

  const END = format(data.studyEnd, 'y.MM.dd(EEE)', { locale: ko });

  const PERIOD = Math.ceil(
    Math.abs(differenceInDays(data.studyStart, data.studyEnd)) / 7,
  );
  // console.log('⏰', PERIOD);
  const MEETINGS = data.studyMeetings;
  const PLACE = data.studyPlace;

  return (
    <>
      <div className="relative w-full text-white shadow-md overflow-hidden">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={IMAGE}
        /> */}
        <div className="px-[1.5rem] pt-[1.2rem] pb-[3rem] flex flex-col space-y-[2rem]">
          <div className="flex items-center gap-2.5">
            <div className="flex space-x-[0.8rem] mr-[1rem]">
              <Label isBlue={true} children={TYPE} />
              <Label children="디자인" />
            </div>
            <span>{PERIOD}주 진행 | </span>
            <span>
              {START} - {END}
            </span>
          </div>
          <h1 className="text-[2rem] font-semibold">{NAME}</h1>
          {LECTURE && <CourseLink courseTitle={LECTURE} courseLink="" />}

          <div className="flex flex-col space-y-[0.8rem] text-content-1 font-medium">
            <div className="flex">
              <div className="flex w-[4.9rem] justify-between mr-[1.8rem]">
                <img src="/images/studyLabel/note-text.svg" />
                <div>일정</div>
              </div>
              <span>{MEETINGS}</span>
            </div>

            <div className="flex">
              <div className="flex w-[4.9rem] justify-between mr-[1.8rem]">
                <img
                  src="/images/studyLabel/location.svg"
                  className="ml-[0.3rem]"
                />
                <div>위치</div>
              </div>
              <span>{PLACE}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
