import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { Study } from '@/lib/schemas/studySchema';

connectDB();

async function getStudies(sort?: string | null, userId?: string) {
  let query = Study.find();

  if (userId) {
    const matching = await Matching.findOne({ userid: userId });

    if (matching) {
      if (sort === 'type') {
        if (matching.studyType === '상관없음') {
          query = query
            .find({ studyType: { $in: ['온라인', '오프라인'] } })
            .limit(3);
        } else {
          query = query.find({ studyType: matching.studyType }).limit(6);
        }
      } else if (sort === 'category') {
        query = query.find({ studyCategory: matching.interests }).limit(12);
      }
    } else {
      if (sort === 'type') {
        query = query.sort({ createdAt: -1 }).limit(6);
      } else if (sort === 'category') {
        query = query.sort({ studyViews: -1 }).limit(12);
      }
    }
  } else {
    if (sort === 'popular') {
      query = query.sort({ studyViews: -1 }).limit(6);
    } else if (sort === 'recent') {
      query = query.sort({ createdAt: -1 }).limit(12);
    }
  }

  return await query.exec();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort') || undefined;
  const userId = searchParams.get('userId') || undefined;

  try {
    const studies = await getStudies(sort, userId);
    return Response.json(studies);
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500 });
  }
}

export async function POST(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await request.json();
  const studies = await Study.create(res);
  console.log(res);
  return Response.json(studies);
}
