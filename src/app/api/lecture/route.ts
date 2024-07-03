import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import mongoose from 'mongoose';

export async function GET(req: Request) {
  connectDB();
  const lectureList = await Lecture.find({});
  return Response.json(lectureList);
}
