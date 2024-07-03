import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';

export async function GET(req: Request) {
  return Response.json({ message: 'GET / api/form' });
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyForm = await StudyForm.create(res);
  return Response.json(studyForm);
}
