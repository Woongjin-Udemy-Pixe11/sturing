import Label from '@/components/common/label/Label';
import CourseLink from '../../../common/CourseLink';

let studyData = {
  STUDY_NAME: 'UXUI 디자이너 본질 강화 피그마 스터디',
  STUDY_TYPE: '오프라인',
  STUDY_IMAGE: '/images/study-img1.png',
  STUDY_SUBJECT: 'AI 시대에 살아남는 UXUI 디자이너 본질 강화 피그마 강의',
  STUDY_START: '06.03(월)',
  STUDY_END: '06.21(일)',
  STUDY_MEETINGS: '토요일 오후 8시 온라인 진행',
  STUDY_PLACE: '추후협의',
};
export default function StudyInfo({ data }: any) {
  let {
    STUDY_NAME,
    STUDY_TYPE,
    STUDY_IMAGE,
    STUDY_SUBJECT,
    STUDY_START,
    STUDY_END,
    STUDY_MEETINGS,
    STUDY_PLACE,
  } = studyData;

  return (
    <>
      <div className="relative w-full text-white shadow-md overflow-hidden">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={STUDY_IMAGE}
        /> */}
        <div className="px-[1.5rem] pt-[1.2rem] pb-[3rem] flex flex-col space-y-[2rem]">
          <div className="flex items-center gap-2.5">
            <div className="flex space-x-[0.8rem] mr-[1rem]">
              <Label isBlue={true} children={STUDY_TYPE} />
              <Label children="디자인" />
            </div>
            <span>4주 진행 | </span>
            <span>
              {STUDY_START} - {STUDY_END}
            </span>
          </div>
          <h1 className="text-[2rem] font-semibold">{STUDY_NAME}</h1>
          <CourseLink courseTitle={STUDY_SUBJECT} courseLink="" />

          <div className="flex flex-col space-y-[0.8rem] text-content-1 font-medium">
            <div className="flex">
              <div className="flex w-[4.9rem] justify-between mr-[1.8rem]">
                <img src="/images/studyLabel/note-text.svg" />
                <div>일정</div>
              </div>
              <span>{STUDY_MEETINGS}</span>
            </div>

            <div className="flex">
              <div className="flex w-[4.9rem] justify-between mr-[1.8rem]">
                <img
                  src="/images/studyLabel/location.svg"
                  className="ml-[0.3rem]"
                />
                <div>위치</div>
              </div>
              <span>{STUDY_PLACE}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
