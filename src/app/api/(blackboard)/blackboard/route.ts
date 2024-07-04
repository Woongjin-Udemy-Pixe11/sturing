import connectDB from '@/lib/db';

import { Blackboard } from '@/lib/schemas/blackboardSchema';

export async function GET(req: Request) {
  connectDB();
  const lectureList = await Blackboard.find({});
  return Response.json(lectureList);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const studyMember = await Blackboard.create(res);
  return Response.json(studyMember);
}
