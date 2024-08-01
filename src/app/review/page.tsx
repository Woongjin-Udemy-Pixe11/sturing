import ReviewForm from '@/components/review/ReviewForm';

export default function page({
  searchParams,
}: {
  searchParams: { evaluatedUserId?: string; studyId?: string };
}) {
  return (
    <>
      <ReviewForm searchParams={searchParams} />
    </>
  );
}
