'use client';
import Image from 'next/image';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import {
  deleteComment,
  getComment,
  updateComment,
} from '@/lib/actions/commentAction';
import { useRouter } from 'next/navigation';

type TStudyCommentProps = {
  commentId: string;
  userId: string;
  studyId: string;
  commentWriteId: string;
  content: string;
  date: string;
};

export default function StudyComment(props: TStudyCommentProps) {
  const { commentId, userId, studyId, commentWriteId, content, date } = props;

  const router = useRouter();

  const [nickname, setNickname] = useState(null);
  const [commentContent, setContent] = useState(content);
  const [commentDate, setDate] = useState(date);

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userImage, setUserImage] = useState('/images/dummy-member-img1.png');

  // commentDate = new Date(commentDate).toLocaleString('ko-KR', {
  //   timeZone: 'Asia/Seoul',
  // });

  const onClickEdit = () => {
    setIsOpen(false);
    setIsEdit(true);
  };

  const onSubmitEdit = async () => {
    const result = await updateComment(commentId, commentContent);

    if (result.success) {
      setIsEdit(false);
      router.push(`/study-detail/${studyId}`);
    } else {
      console.log(result.message);
    }
  };

  const onClickDelete = async () => {
    setIsOpen(false);
    const result = await deleteComment(commentId);

    if (result.success) {
      setNickname(null);
    } else {
      console.log(result.message);
    }
  };

  useEffect(() => {
    const fetchCommentUser = async () => {
      try {
        const res = await fetch(`/api/users/?id=${commentWriteId}`, {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to fetch User');
        const user = await res.json();
        setNickname(user.nickname);
        setUserImage(user.image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommentUser();
  }, []);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const result = await getComment(commentId);
        if (result.success) {
          setDate(result.data.updatedAt);
        } else {
          console.log(result.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchComment();
  }, [commentContent]);

  // console.log('⭐️', convertDate);
  return (
    <>
      {nickname && (
        <div className="flex flex-col text-content-2  mx-[2rem]">
          <div className="flex flex-row items-center gap-x-[0.8rem] justify-between">
            <div className="flex flex-row items-center justify-center">
              <Image
                src={userImage}
                width={28}
                height={28}
                alt="User Image"
                className="rounded-full border-gray-300 border-[0.1rem]"
              />
              <span className="ml-[0.5rem] text-gray-900">{nickname}</span>
            </div>
            {/* <CommentContent content={content} date={convertDate} /> */}

            {userId == commentWriteId && (
              <div className="flex flex-col items-center gap-y-[0.4rem]">
                <button
                  type="button"
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  <HiEllipsisVertical size={16} />
                </button>
                {isOpen && !isEdit && (
                  <ul className="w-[4rem] text-center border border-[text-gray-800] mt-[2rem] z-10 absolute">
                    <li>
                      <button type="button" onClick={onClickEdit}>
                        수정
                      </button>
                    </li>
                    <li>
                      <button type="button" onClick={onClickDelete}>
                        삭제
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>

          {isEdit ? (
            <form action={onSubmitEdit}>
              <div className="relative flex flex-row items-center mt-[1rem]">
                <input
                  className="w-full h-[3rem] rounded-[8rem] bg-gray-100 border-gray-300 border-[0.1rem] text-content-2 text-gray-600 pl-[1.5rem] placeholder:bg-transparent focus:outline-none"
                  value={commentContent}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                ></input>
                <button type="submit" className="absolute right-0 pr-[1rem]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6647 16.2225C9.77967 16.2225 8.52717 15.6 7.53717 12.6225L6.99717 11.0025L5.37717 10.4625C2.40717 9.47249 1.78467 8.21999 1.78467 7.33499C1.78467 6.45749 2.40717 5.19749 5.37717 4.19999L11.7447 2.07749C13.3347 1.54499 14.6622 1.70249 15.4797 2.51249C16.2972 3.32249 16.4547 4.65749 15.9222 6.24749L13.7997 12.615C12.8022 15.6 11.5497 16.2225 10.6647 16.2225ZM5.72967 5.27249C3.64467 5.96999 2.90217 6.79499 2.90217 7.33499C2.90217 7.87499 3.64467 8.69999 5.72967 9.38999L7.61967 10.02C7.78467 10.0725 7.91967 10.2075 7.97217 10.3725L8.60217 12.2625C9.29217 14.3475 10.1247 15.09 10.6647 15.09C11.2047 15.09 12.0297 14.3475 12.7272 12.2625L14.8497 5.89499C15.2322 4.73999 15.1647 3.79499 14.6772 3.30749C14.1897 2.81999 13.2447 2.75999 12.0972 3.14249L5.72967 5.27249Z"
                      fill="#B5B5B5"
                    />
                    <path
                      d="M7.5826 10.8C7.4401 10.8 7.2976 10.7475 7.1851 10.635C6.9676 10.4175 6.9676 10.0575 7.1851 9.84L9.8701 7.1475C10.0876 6.93 10.4476 6.93 10.6651 7.1475C10.8826 7.365 10.8826 7.725 10.6651 7.9425L7.9801 10.635C7.8751 10.7475 7.7251 10.8 7.5826 10.8Z"
                      fill="#B5B5B5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          ) : (
            <p className="text-gray-900 text-content-2 mt-[0.8rem]">
              {commentContent}
            </p>
          )}

          <span className="text-gray-600 mt-[0.6rem] mb-[2rem]">
            {new Date(commentDate).toLocaleString('ko-KR', {
              timeZone: 'Asia/Seoul',
            })}
          </span>
        </div>
      )}
    </>
  );
}
