import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
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
          model: 'matching',
          select: 'level',
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
