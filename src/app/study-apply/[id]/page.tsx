import StudyApplyClient from '@/components/apply/StudyApplyClient';

export default function page({ params }: { params: { id: string } }) {
  const _id = params.id;

  return (
    <>
      <StudyApplyClient studyId={_id} />
    </>
  );
}
