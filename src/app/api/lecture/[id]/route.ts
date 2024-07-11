import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { Types } from 'mongoose';

const dataFields = (lecture: any, fields: string[]) => {
  return Object.fromEntries(
    fields
      .filter((field) => field in lecture)
      .map((field) => [field, lecture[field as keyof typeof lecture]]),
  );
};

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;

  const { searchParams } = new URL(req.url);
  const needData = searchParams.getAll('data');

  if (!id) {
    return Response.json({ error: 'Lecture ID is required' }, { status: 400 });
  }

  try {
    const lecture = await Lecture.findById(id);

    if (!lecture) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    if (needData.length > 0) {
      return Response.json(dataFields(lecture, needData));
    } else {
      return Response.json(lecture);
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
