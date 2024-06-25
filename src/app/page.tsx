import Card from '@/components/common/Card';
import Label from '@/components/common/Label';

export default function page() {
  return (
    <>
      <h1>page Component</h1>
      <Card
        studyImage={'/images/card-dummy-img.png'}
        studyMeetings={'스터디 시간 미정'}
        studyTypeisBlue={true}
        studyType={'오프라인'}
        studyCategoryisBlue={false}
        studyCatecory={'디자인'}
        studyName={'AI 활용 UXUI 포트폴리오 강의 스터디'}
        studyStart={'06.20'}
        studyEnd={'06.30'}
        studyPlace={'서울 종로구'}
        studyJoinMember={2}
        studyMember={4}
      />
    </>
  );
}
