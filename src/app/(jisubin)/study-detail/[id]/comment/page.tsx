import StudyComment from '../../_components/StudyComment';

type TCommentPageProps = {
  params: { id: string };
};

export default function CommentPage(props: TCommentPageProps) {
  const { params } = props;
  const id = params.id;
  return (
    <>
      <StudyComment id={id} />
    </>
  );
}
