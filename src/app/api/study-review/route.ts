import connectDB from '@/lib/db';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';
import { User } from '@/lib/schemas/userSchema';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  connectDB();
  try {
    const url = new URL(request.url);
    const id: any = url.searchParams.get('id');
    // const objectId = new mongoose.Types.ObjectId(id);
    // console.log(objectId);

    let reviewList = await StudyReview.find({
      evaluateduser: `${id}`,
    }).populate({ path: 'userId', select: 'nickname image' });
    console.log(reviewList);
    if (reviewList === null) {
      return null;
    }

    return new Response(JSON.stringify(reviewList), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return Response.json(error);
  }
}
