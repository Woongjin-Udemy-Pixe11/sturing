import connectDB from '@/lib/db';
import { StudyTodo } from '@/lib/schemas/studyTodoSchema';

export async function GET(req: Request) {
  connectDB();
  const url = new URL(req.url);
  const studyId = url.searchParams.get('study');
  const userId = url.searchParams.get('user');
  const date = url.searchParams.get('date');

  const lectureList = await StudyTodo.find({
    studyId: studyId,
    userId: userId,
  });

  return Response.json(lectureList);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyTodo.create(res);
  return Response.json(studyMember);
}
function ISODate(arg0: string) {
  throw new Error('Function not implemented.');
}
