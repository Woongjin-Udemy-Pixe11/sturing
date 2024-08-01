import OtherApply from '@/components/apply/OtherApply';

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <OtherApply id={params.id} />
    </>
  );
}
