import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { Types } from 'mongoose';

connectDB();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const myApplication = await StudyForm.aggregate([
      {
        $match: {
          userId: new Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'studies',
          localField: 'studyId',
          foreignField: '_id',
          as: 'study',
        },
      },
      {
        $unwind: '$study',
      },
      {
        $project: {
          _id: 1,
          studyFormTitle: 1,
          studyFormContent: 1,
          studyFormRead: 1,
          studyFormSure: 1,
          createdAt: 1,
          updatedAt: 1,
          studyId: {
            _id: '$study._id',
            studyName: '$study.studyName',
            studyType: '$study.studyType',
            studyStart: '$study.studyStart',
            studyEnd: '$study.studyEnd',
            studyPlace: '$study.studyPlace',
          },
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);

    return Response.json(myApplication);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const studyFormId = searchParams.get('studyFormId');

  if (!studyFormId) {
    return Response.json(
      { error: 'Study Form ID is required' },
      { status: 400 },
    );
  }

  try {
    const deletedForm = await StudyForm.findByIdAndDelete(studyFormId);

    if (!deletedForm) {
      return Response.json({ error: 'Study Form not found' }, { status: 404 });
    }

    return Response.json({ message: 'Delete successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
