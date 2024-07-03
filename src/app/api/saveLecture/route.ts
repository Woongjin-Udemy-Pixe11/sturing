import connectDB from '@/lib/db';
import { lectures } from '@/dummy/lectureList';
import { lectureModel } from '@/lib/schemas/lectureSchema';
import mongoose from 'mongoose';

const saveLectures = async () => {
  connectDB();
  try {
    await lectureModel.insertMany(lectures);
    console.log('강의 데이터가 성공적으로 저장되었습니다.');
    mongoose.disconnect(); // 저장 후 MongoDB 연결 종료
  } catch (error) {
    console.error('강의 데이터 저장 중 오류 발생:', error);
  }
};

export async function GET(req: Request) {
  //   await saveLectures();

  connectDB();
  const lectureList = await lectureModel.find({});
  return Response.json(lectureList);
}
