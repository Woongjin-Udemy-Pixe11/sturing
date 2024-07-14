import Image from 'next/image';

type TStudyCommentProps = {
  commentWriteId: string;
  content: string;
  date: string;
};

async function fetchCommentUser(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/users/?id=${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch User');
  return res.json();
}

export default async function StudyComment(props: TStudyCommentProps) {
  const { commentWriteId, content, date } = props;

  const commentUser = await fetchCommentUser(commentWriteId);
  // console.log('🔴', commentUser);

  const convertDate = new Date(date).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });

  // console.log('⭐️', convertDate);
  return (
    <>
      <div className="flex flex-row items-center mx-[2rem] gap-x-[0.8rem] text-content-2 justify-between">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/images/dummy-member-img1.png"
            width={28}
            height={28}
            alt="User Image"
            className="rounded-full border-gray-300 border-[0.1rem]"
          />
          <span className="ml-[0.5rem]">{commentUser.nickname}</span>
        </div>
        <span className="text-gray-600">{convertDate}</span>
      </div>

      <p className="text-gray-700 text-content-2 mx-[2rem] mt-[0.8rem] mb-[2rem]">
        {content}
      </p>
    </>
  );
}
