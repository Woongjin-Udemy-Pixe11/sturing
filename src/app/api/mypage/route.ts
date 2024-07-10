import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';
import { Study } from '@/lib/schemas/studySchema';
import { User } from '@/lib/schemas/userSchema';
import { revalidatePath } from 'next/cache';

//TODO:닉네임부분 revalidate 어떻게했는지 기억

export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    let users = await User.findOne({ _id: `${id}` });
    let matchinginfo = await Matching.findOne({ userid: `${id}` });
    let reviewList = await StudyReview.find({
      evaluateduser: `${id}`,
    });
    let numberReview = reviewList.length;

    return new Response(JSON.stringify({ users, matchinginfo, numberReview }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return Response.json(null);
  }
}

export async function PATCH(request: Request) {
  await connectDB();
  const res = await request.json();
  console.log(res);

  const id = res.id;

  const updatematching = await User.updateOne(
    { _id: `${id}` },
    {
      nickname: `${res.nickname}`,
    },
  );
  revalidatePath(`/users/${id}/detail`);

  return new Response(JSON.stringify({ updatematching }));
}

export async function DELETE(request: Request) {
  await connectDB();

  const res = await request.json();
  let test = await User.deleteOne({ _id: res });
  await Matching.deleteOne({ userid: res });
  await Study.deleteMany({ leaderId: res });
  return new Response(JSON.stringify({ test }));
}
