import connectDB from '@/lib/db';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';

export async function GET(req: Request) {
  return Response.json({ message: 'GET / api/studyMember' });
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyMember.create(res);
  return Response.json(studyMember);
}
