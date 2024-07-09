import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { Types } from 'mongoose';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;

  if (!id) {
    return Response.json({ error: 'Lecture ID is required' }, { status: 400 });
  }

  try {
    const lecture = await Lecture.findById({ _id: `${id}` });
    if (!lecture) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    return Response.json(lecture);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
