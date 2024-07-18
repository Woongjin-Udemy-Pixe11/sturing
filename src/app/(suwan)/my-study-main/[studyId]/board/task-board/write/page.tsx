'use server';

import LongButton from '@/components/common/LongButton';
import StudyForm from '@/components/common/StudyForm';
import BoardTop from '../../_component/BoardTop';
import { getSession } from '@/utils/getSessions';
import NoticeForm from '../../_component/NoticeForm';
import { convertBase64 } from '@/utils/convertBase64';

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
        <NoticeForm studyId={studyId} handleSubmit={handleSubmit} imageUpload />
        {/* <StudyForm
          heading="과제 게시판 작성"
          titleLabel="글 제목"
          imageUpload
          imageLabel="과제 인증 사진"
          contentLabel="제목을 입력해 주세요"
          titlePlaceholder="내용"
          contentMaxLength={3000}
          contentPlaceholder="내용을 입력해 주세요"
        />
        <LongButton className={'mt-[4rem]'} color="blue">
          등록하기
        </LongButton> */}
      </div>
    </>
  );
}
