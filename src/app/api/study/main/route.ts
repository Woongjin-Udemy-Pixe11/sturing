import { getStudies } from '@/lib/actions/userMainStudies';
import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

connectDB();

type SortOption = 'type' | 'category' | 'popular' | 'recent' | undefined;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort') as SortOption;
  const userId = searchParams.get('userId') || undefined;

  try {
    const studies = await getStudies(sort, userId);
    return Response.json(studies);
  } catch (error) {
    console.error('Error fetching studies:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await request.json();
  const studies = await Study.create(res);
  console.log(res);
  return Response.json(studies);
}
