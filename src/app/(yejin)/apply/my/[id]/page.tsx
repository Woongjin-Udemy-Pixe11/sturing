import MyApply from '@/components/(yejin)/apply/MyApply';

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <MyApply id={params.id} />
    </>
  );
}
