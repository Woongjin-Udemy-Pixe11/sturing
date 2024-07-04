import connectDB from '@/lib/db';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';

export async function GET(request: Request) {
  connectDB();
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    let reviewList = await StudyReview.find({ evaluatedUser: `${id}` });
    if (reviewList === null) {
      return null;
    }
    return new Response(JSON.stringify({ reviewList }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return Response.json(error);
  }
}
