import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import { Types } from 'mongoose';

connectDB();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { action } = await request.json();

  if (!id) {
    return Response.json(
      { error: 'Study Form ID is required' },
      { status: 400 },
    );
  }

  try {
    const studyForm = await StudyForm.findById(new Types.ObjectId(id));

    if (!studyForm) {
      return Response.json(
        { error: '지원서를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    if (action === 'accept') {
      studyForm.studyFormSure = true;
      await studyForm.save();

      await StudyMember.create({
        studyId: studyForm.studyId,
        userId: studyForm.userId,
      });

      return Response.json({ message: '지원이 수락되었습니다.' });
    } else if (action === 'reject') {
      await StudyForm.findByIdAndDelete(id);
      return Response.json({ message: '지원이 거절되었습니다.' });
    }

    return Response.json({ error: '잘못된 액션입니다.' }, { status: 400 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
