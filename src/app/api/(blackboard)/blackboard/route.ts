import connectDB from '@/lib/db';

import { Blackboard } from '@/lib/schemas/blackboardSchema';

export async function GET(req: Request) {
  connectDB();
  const blackboards = await Blackboard.find({});
  return Response.json(blackboards);
}

export async function POST(request: Request) {
  connectDB();
  const res = await request.json();
  const newBlackboard = await Blackboard.create(res);
  return Response.json(newBlackboard);
}
