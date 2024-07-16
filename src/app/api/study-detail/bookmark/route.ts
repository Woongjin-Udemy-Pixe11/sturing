import connectDB from '@/lib/db';
import { Bookmark } from '@/lib/schemas/bookmarkSchema';
import { Types } from 'mongoose';

export async function GET(req: Request) {
  connectDB();

  const url = new URL(req.url);
  const [userId] = url.searchParams.getAll('userId');
  const [studyId] = url.searchParams.getAll('studyId');

  try {
    let bookmark = await Bookmark.findOne({
      userId: new Types.ObjectId(userId),
      targetId: new Types.ObjectId(studyId),
    });
    return Response.json(bookmark);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  const res = await req.json();
  const bookmark = await Bookmark.create(res);
  return Response.json(bookmark);
}

export async function PATCH(req: Request) {
  await connectDB();

  const url = new URL(req.url);
  const [userId] = url.searchParams.getAll('userId');
  const [studyId] = url.searchParams.getAll('studyId');

  try {
    let bookmark = await Bookmark.findOne({
      userId: new Types.ObjectId(userId),
      targetId: new Types.ObjectId(studyId),
    });

    bookmark.checked = !bookmark.checked;
    await bookmark.save();

    return Response.json(bookmark);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
