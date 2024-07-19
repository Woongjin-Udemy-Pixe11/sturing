'use server';

import StudyForm from '@/components/common/StudyForm';
import BoardTop from '../../../_component/BoardTop';
import { getSession } from '@/utils/getSessions';
import { redirect } from 'next/navigation';
import NoticeForm from '../../../_component/NoticeForm';
import SubHeader from '@/components/common/SubHeader';
import { fetchBlackboard } from '@/utils/my-study-main/fetch';
import { TFormData } from '@/types/TStudyBoard';

export default async function page({
  params,
}: {
  params: { studyId: string; taskId: string };
}) {
  const session = await getSession();
  let userId = session?.user?.id;

  const studyId = params.studyId;
  const taskId = params.taskId;

  const boardType = 'task';
  const task = await fetchBlackboard(boardType, taskId);

  const defaultTitle = task.title;
  const defaultContent = task.content;
  const defaultImage = task.image;

  const handleSubmit = async (data: TFormData) => {
    'use server';
    const { title, content, img } = data;

    try {
      const response = await fetch(
        `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&blackboardId=${taskId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content, img }),
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
          imageUpload
          boardType={boardType}
          studyId={studyId}
          handleSubmit={handleSubmit}
          defaultImage={defaultImage}
          defaultTitle={defaultTitle}
          defaultContent={defaultContent}
        />
      </div>
    </div>
  );
}
