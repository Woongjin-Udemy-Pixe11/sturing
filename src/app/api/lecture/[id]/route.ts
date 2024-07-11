import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { Types } from 'mongoose';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;

  const { searchParams } = new URL(req.url);
  const needData = searchParams.get('data');
  console.log('needData', needData);

  if (!id) {
    return Response.json({ error: 'Lecture ID is required' }, { status: 400 });
  }

  try {
    const lecture = await Lecture.findById({ _id: `${id}` });
    if (!lecture) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    if (needData) {
      return Response.json(lecture[needData]);
    } else {
      return Response.json(lecture);
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
