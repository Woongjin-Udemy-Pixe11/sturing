'use server';
import BoardTop from '../../_component/BoardTop';
import { getSession } from '@/utils/getSessions';
import NoticeForm from '../../_component/NoticeForm';
import SubHeader from '@/components/common/SubHeader';
import { TFormData } from '@/types/TStudyBoard';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;

  const session = await getSession();
  let userId = session?.user?.id;
  const boardType = 'notice';

  const handleSubmit = async (data: TFormData) => {
    'use server';
    const { title, content } = data;

    try {
      const response = await fetch(
        `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&studyId=${studyId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, title, content }),
        },
      );
      const result = await response.json();
      return { blackboardId: result };
    } catch (error) {
      console.error('Error posting notice:', error);
      return { error: 'Failed to submit notice' };
    }
  };

  return (
    <div>
      {/* <BoardTop /> */}
      <SubHeader bgGray={true} />
      <div className="bg-white p-[1.6rem]">
        <NoticeForm
          boardType={boardType}
          studyId={studyId}
          handleSubmit={handleSubmit}
          contentMaxLength={1000}
          heading="공지 작성"
        />
      </div>
    </div>
  );
}
