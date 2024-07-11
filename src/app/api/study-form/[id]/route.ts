import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';
import { Study } from '@/lib/schemas/studySchema';
import { Types } from 'mongoose';

connectDB();

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const studyForm = await StudyForm.findById(new Types.ObjectId(id))
      .populate({
        path: 'studyId',
        select: 'studyName',
      })
      .populate({
        path: 'userId',
        select: 'nickname image sturingPercent matchingInfo',
        populate: {
          path: 'matchingInfo',
          select: 'level interests',
        },
      });

    if (!studyForm) {
      return Response.json({ error: 'Study form not found' }, { status: 404 });
    }
    return Response.json(studyForm);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(
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

    if (action === 'view') {
      const updatedStudyForm = await StudyForm.findByIdAndUpdate(
        new Types.ObjectId(id),
        { studyFormRead: true },
        { new: true },
      );
      return Response.json({
        updatedStudyForm,
      });
    }

    if (action === 'accept') {
      studyForm.studyFormSure = true;
      await studyForm.save();

      await StudyMember.create({
        studyId: studyForm.studyId,
        userId: studyForm.userId,
      });
      await Study.findByIdAndUpdate(
        studyForm.studyId,
        { $inc: { studyJoinMember: 1 } },
        { new: true },
      );

      await StudyForm.findByIdAndDelete(id);
      return Response.json({ message: '지원이 수락되었습니다.' });
    }

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

      await StudyForm.findByIdAndDelete(id);

      return Response.json({ message: '지원이 수락되었습니다.' });
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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return Response.json(
      { error: 'Study Form ID is required' },
      { status: 400 },
    );
  }

  try {
    await StudyForm.deleteOne({ _id: new Types.ObjectId(id) });

    return Response.json({ message: '지원이 거절되었습니다.' });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
