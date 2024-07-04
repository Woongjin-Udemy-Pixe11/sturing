'use server';
import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';

export async function GET(req: Request) {
  await connectDB(); // 비동기 함수는 await로 처리해야 합니다.
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  let matchingList;
  const existing = await Matching.findOne({
    userid: `${id}`,
  });
  if (existing !== null) {
    matchingList = existing;
  } else {
    matchingList = {
      userid: `${id}`,
      interests: [],
      level: {},
      studyType: '',
      preferRegion: [],
      preferMood: [],
    };
  }

  return new Response(JSON.stringify(matchingList), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  await connectDB();
  const res = await request.json();
  await Matching.create(res).then(() => console.log('connected'));
  return Response.json({ message: 'Matching Info saved' });
}

export async function PATCH(request: Request) {
  await connectDB();
  const res = await request.json();

  const id = res.userid;

  const updatematching = await Matching.updateOne(
    { userid: `${id}` },
    {
      ...res,
    },
  );

  return Response.json({ message: updatematching });
}
