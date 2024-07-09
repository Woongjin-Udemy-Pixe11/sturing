'use server';
import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { User } from '@/lib/schemas/userSchema';
import mongoose from 'mongoose';

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
  const matchingInfo = new mongoose.Types.ObjectId();
  const res = await request.json();
  const updatedres = {
    ...res,
    matchingInfo: matchingInfo,
  };
  const id = updatedres.userid;
  const updatematching = await User.updateOne(
    { _id: `${id}` },
    {
      matchingInfo: matchingInfo,
    },
  );

  try {
    const newMatching = new Matching(updatedres);
    console.log(newMatching); // Create a new Matching instance
    await newMatching.save(); // Save the new matching instance to the database
    return Response.json({ message: 'Matching Info saved' }); // Log the newly created matching
  } catch (error) {
    console.error('Error creating new matching:', error);
    return Response.json({ message: 'Matching Info not saved' });
  }
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
