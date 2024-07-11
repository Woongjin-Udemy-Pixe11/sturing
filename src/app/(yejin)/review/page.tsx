import ReviewForm from '@/components/(yejin)/review/ReviewForm';

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
