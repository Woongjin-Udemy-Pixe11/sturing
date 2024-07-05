import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

connectDB();

async function getStudies(sort?: string | null) {
  let studies = Study.find();
  if (sort === 'popular') {
    studies = studies.sort({ studyViews: -1 }).limit(3);
  } else if (sort === 'recent') {
    studies = studies.sort({ createdAt: -1 }).limit(3);
  }
  return await studies.exec();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort');
  try {
    const studies = await getStudies(sort);
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
