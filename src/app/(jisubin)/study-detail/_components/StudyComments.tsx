import CommentForm from './CommentForm';
import StudyComment from './StudyComment';
import { getComments } from '@/lib/actions/commentAction';
import { getSession } from '@/utils/getSessions';

type TStudyCommentsProps = {
  id: string;
};

export default async function StudyComments(props: TStudyCommentsProps) {
  const { id } = props;

  let comments = await getComments(id);
  comments = comments.data;
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <>
      <div className=" bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between mt-[2.4rem] pb-[1.2rem]">
            <h2 className="mx-[2rem] font-semibold text-gray-950">댓글</h2>
          </div>

          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>

          <div>
            {comments &&
              comments.map((comment) => (
                <StudyComment
                  commentId={comment._id}
                  userId={userId}
                  studyId={id}
                  commentWriteId={comment.commentWriteId}
                  content={comment.commentContent}
                  date={comment.updatedAt}
                />
              ))}
          </div>

          <CommentForm studyId={id} />
        </div>
      </div>
    </>
  );
}
