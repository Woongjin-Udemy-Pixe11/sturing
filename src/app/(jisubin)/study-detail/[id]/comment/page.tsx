import StudyComments from '../../_components/StudyComments';

type TCommentPageProps = {
  params: { id: string };
};

export default function CommentPage(props: TCommentPageProps) {
  const { params } = props;
  const id = params.id;
  return (
    <div className="pb-[10rem]">
      <StudyComments id={id} />
    </div>
  );
}
