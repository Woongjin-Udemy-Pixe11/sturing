import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';
//TODO: 강의검색쿼리집어넣어야함
export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword');
    console.log(keyword);
    const searchstudies = await Study.find({
      studyName: {
        $regex: new RegExp(`${keyword}`, 'i'),
      },
    });
    return new Response(JSON.stringify({ searchstudies }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
  }
}
