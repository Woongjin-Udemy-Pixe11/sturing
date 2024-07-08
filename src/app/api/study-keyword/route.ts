import connectDB from '@/lib/db';
import { StudyKeyword } from '@/lib/schemas/studyKeywordSchema';

export async function GET(req: Request) {
  connectDB();
  const lectureList = await StudyKeyword.find({});
  return Response.json(lectureList);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await StudyKeyword.create(res);
  return Response.json(studyMember);
}
