import connectDB from '@/lib/db';
import { StudyTodoList } from '@/lib/schemas/studyTodoSchema';

export async function GET(req: Request) {
  connectDB();
  const lectureList = await StudyTodoList.find({});
  return Response.json(lectureList);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyTodoList.create(res);
  return Response.json(studyMember);
}
