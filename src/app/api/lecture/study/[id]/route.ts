import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';
import { Types } from 'mongoose';

const mongoose = require('mongoose');

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;
  console.log('study..', JSON.stringify(id));
  if (!id) {
    return Response.json({ error: 'Lecture ID is required' }, { status: 400 });
  }
  console.log('id#$#', id);
  try {
    const lectureId = new Types.ObjectId(id);
    console.log(lectureId);
    const lectureStudy = await Study.find({
      studyLecture: lectureId,
    });

    console.log('강의스터디 정보', lectureStudy);
    if (!lectureStudy) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    return Response.json(lectureStudy);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
