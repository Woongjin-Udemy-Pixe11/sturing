'use server';
import BoardTop from '../../_component/BoardTop';
import { getSession } from '@/utils/getSessions';
import NoticeForm from '../../_component/NoticeForm';

type TFormData = {
  title: string;
  content: string;
  img?: string;
};
export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;
  const session = await getSession();
  let userId = session?.user?.id;

  const boardType = 'task';

  const handleSubmit = async (data: TFormData) => {
    'use server';
    const { title, content, img } = data;
    try {
      const response = await fetch(
        `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&studyId=${studyId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, title, content, img }),
        },
      );
      const result = await response.json();
      return { noticeId: result };
    } catch (error) {
      console.error('Error posting notice:', error);
      return { error: 'Failed to submit notice' };
    }
  };

  return (
    <>
      <BoardTop />
      <div className="bg-white p-[1.6rem]">
        <NoticeForm
          studyId={studyId}
          handleSubmit={handleSubmit}
          imageUpload
          contentMaxLength={3000}
          heading="과제 게시판 작성"
        />
      </div>
    </>
  );
}
