import { HiEllipsisVertical } from 'react-icons/hi2';
import CommentForm from './CommentForm';
import StudyComment from './StudyComment';
import { getComment } from '@/lib/actions/commentAction';

type TStudyCommentsProps = {
  id: string;
};

export default async function StudyComments(props: TStudyCommentsProps) {
  const { id } = props;

  let comments = await getComment(id);

  // const result = await postComment(formData);
  //   if (result.success) {
  //     setComment('');
  //   } else {
  //     console.log(result.message);
  //   }
  comments = comments.data;
  // console.log('❤️', comments);

  return (
    <>
      <div className=" bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between mt-[2.4rem] pb-[1.2rem]">
            <h2 className="mx-[2rem] font-semibold text-gray-950">댓글</h2>
            <div className="pr-[2rem]">
              <HiEllipsisVertical />
            </div>
          </div>

          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>

          <div>
            {comments &&
              comments.map((comment) => (
                <StudyComment
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
