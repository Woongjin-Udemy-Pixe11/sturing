import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { Types } from 'mongoose';

connectDB();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return Response.json({ error: 'Lecture ID not found' }, { status: 400 });
  }

  try {
    const lecture = await Lecture.findById(new Types.ObjectId(id));
    if (!lecture) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    return Response.json(lecture);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
