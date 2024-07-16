'use server';

import StudyForm from '@/components/common/StudyForm';
import BoardTop from '../../_component/BoardTop';
import { getSession } from '@/utils/getSessions';
import { redirect } from 'next/navigation';
import NoticeForm from '../../_component/NoticeForm';

export default async function page({
  params,
}: {
  params: { studyId: string };
}) {
  const studyId = params.studyId;

  const session = await getSession();
  let userId = session?.user?.id;

  const handleSubmit = async (formData: any) => {
    'use server';
    const title = formData.get('title');
    const content = formData.get('content');
    try {
      const response = await fetch(
        `${process.env.LOCAL_URL}/api/study-board/notice?studyId=${studyId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, title, content }),
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
    <div>
      <BoardTop />
      <div className="bg-white p-[1.6rem]">
        <NoticeForm studyId={studyId} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
