import MyApply from '@/components/apply/MyApply';

type TMyApplyProps = {
  params: {
    id: string;
  };
};

export default function page(props: TMyApplyProps) {
  const { params } = props;
  return (
    <>
      <MyApply id={params.id} />
    </>
  );
}
