import RangeCalendar from '@/components/common/calender/RangeCalendar.tsx';
import Tag from '../form/Tag';

export default function StudyDetail() {
  return (
    <>
      <div>스터디 상세정보를 입력해 주세요</div>
      <div>스터디 진행 기간</div>
      <div>
        <RangeCalendar />
      </div>
      <div>스터디 모집은 시작 3일 전에 자동으로 마감됩니다.</div>
      <div>스터디 진행 요일 및 시간</div>
      <div>드롭다운 라이브러리</div>
      <div>스터디 분위기 키워드(선택)</div>
      <div>3개까지 선택 가능합니다.</div>
      <div className="flex">
        <Tag text="친근한" />
        <Tag text="친근한" />
        <Tag text="친근한" />
      </div>
    </>
  );
}
