import StudyLog from '../_pages/StudyLog';

export default function page({ params }: { params: any }) {
  const id = params.userid;
  return <StudyLog id={id} />;
}
