import connectDB from '@/lib/db';
import { StudyTodo } from '@/lib/schemas/studyTodoSchema';

export async function GET(req: Request) {
  connectDB();
  const lectureList = await StudyTodo.find({});
  return Response.json(lectureList);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyTodo.create(res);
  return Response.json(studyMember);
}
