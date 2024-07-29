import connectDB from '@/lib/db';
import { StudyTodo } from '@/lib/schemas/studyTodoSchema';

export async function GET(req: Request) {
  connectDB();
  console.log('get');
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

export async function PATCH(request: Request) {
  connectDB();
  const todoId = await request.json();
  const todo = await StudyTodo.findOne({ _id: todoId });

  if (!todo) {
    return Response.json({ error: 'Todo not found' }, { status: 404 });
  }
  // 현재 상태를 반전시킵니다.
  const newTodoCompleted = !todo.todoCompleted;

  // 업데이트를 수행합니다.
  const updateResult = await StudyTodo.updateOne(
    { _id: todoId },
    {
      todoCompleted: newTodoCompleted,
    },
  );

  console.log('Update Result:', updateResult);
  return Response.json(updateResult);
}

export async function DELETE(request: Request) {
  await connectDB();

  const res = await request.json();
  let test = await StudyTodo.deleteOne({ _id: res });
  // return new Response(JSON.stringify({ test }));
  return Response.json(test);
}
