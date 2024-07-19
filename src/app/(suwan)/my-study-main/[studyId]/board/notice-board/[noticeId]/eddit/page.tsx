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
  params: { studyId: string; noticeId: string };
}) {
  const session = await getSession();
  let userId = session?.user?.id;

  const studyId = params.studyId;
  const noticeId = params.noticeId;

  const notice = await fetchBlackboard('notice', noticeId);

  const defaultTitle = notice.title;
  const defaultContent = notice.content;

  const boardType = 'notice';
  console.log('📍', defaultTitle, defaultContent);

  const handleSubmit = async (data: TFormData) => {
    'use server';
    const { title, content } = data;

    try {
      const response = await fetch(
        `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&blackboardId=${noticeId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
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
          defaultTitle={defaultTitle}
          defaultContent={defaultContent}
        />
      </div>
    </div>
  );
}
