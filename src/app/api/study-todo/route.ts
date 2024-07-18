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

export async function PATCH(request: Request) {
  // 데이터베이스에 연결합니다.
  connectDB();

  // 요청에서 JSON 데이터를 파싱합니다.
  const res = await request.json();
  console.log(res);

  // 문서를 조회하여 현재 상태를 가져옵니다.
  const todo = await StudyTodo.findOne({ _id: res });

  if (!todo) {
    throw new Error('Todo not found');
  }

  // 현재 상태를 반전시킵니다.
  const newTodoCompleted = !todo.todoCompleted;

  // 업데이트를 수행합니다.
  const updateResult = await StudyTodo.updateOne(
    { _id: res },
    {
      todoCompleted: newTodoCompleted,
    },
  );

  console.log('Update Result:', updateResult);
  return updateResult;
}

export async function DELETE(request: Request) {
  await connectDB();

  const res = await request.json();
  let test = await StudyTodo.deleteOne({ _id: res });
  return new Response(JSON.stringify({ test }));
}
