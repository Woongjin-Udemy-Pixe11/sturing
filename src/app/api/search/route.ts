import connectDB from '@/lib/db';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { Study } from '@/lib/schemas/studySchema';
//TODO: 강의검색쿼리집어넣어야함

const searchByKeyword = async (keyword: string) => {
  const searchstudies = await Study.find({
    studyName: { $regex: new RegExp(keyword, 'i') },
  });
  const searchlectures = await Lecture.find({
    lectureName: { $regex: new RegExp(keyword, 'i') },
  });
  return { searchstudies, searchlectures };
};

const searchByFilters = async (filters: any) => {
  const query = Object.entries(filters).reduce<Record<string, any>>(
    (acc, [key, value]) => {
      if (Array.isArray(value) && value.length) {
        acc[key] = { $in: value };
      } else if (value) {
        acc[key] = value;
      }
      return acc;
    },
    {},
  );

  const searchstudies = await Study.find(query);
  return { searchstudies };
};

export async function GET(req: Request) {
  await connectDB();
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword');

    const result = keyword
      ? await searchByKeyword(keyword)
      : await searchByFilters({
          field: url.searchParams.get('field')?.split(','),
          region: url.searchParams.get('region')?.split(','),
          people: url.searchParams.get('people')?.split(','),
          period: url.searchParams.get('period'),
          level: url.searchParams.get('level')?.split(','),
        });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
  }
}
