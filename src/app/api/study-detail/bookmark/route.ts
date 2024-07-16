import connectDB from '@/lib/db';
import { Bookmark } from '@/lib/schemas/bookmarkSchema';
import { Study } from '@/lib/schemas/studySchema';

export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const studyId = url.searchParams.get('studyId');

    let bookmark = await Bookmark.find({
      userid: `${userId}`,
      studyid: `${studyId}`,
    });

    return new Response(JSON.stringify(bookmark), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
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
  const id = url.searchParams.get('id');
  if (!id) {
    return Response.json({ error: 'id is required' }, { status: 400 });
  }

  try {
    const bookmark = await req.json();
    const { checked } = bookmark;

    bookmark[checked] = !bookmark[checked];

    return Response.json({
      message: 'bookmark updated successfully',
      bookmark,
    });
  } catch (error) {
    console.error('Error', error);
    return Response.json({ error: 'bookmark updated Failed' }, { status: 500 });
  }
}
