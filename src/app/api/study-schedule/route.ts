import connectDB from '@/lib/db';
import { StudySchedule } from '@/lib/schemas/studyScheduleSchema';
import { request } from 'http';

export async function GET(res: Request) {
  return Response.json(res);
}

export async function POST(request: Request) {
  await connectDB();
  const res = await request.json();
  await StudySchedule.create(res)
    .then(() => console.log('connected'))
    .catch((e) => console.log(e));
  return Response.json({ message: 'Save newStudySchedule' });
}
