import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

export async function GET(req: Request) {
  connectDB();

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    const study = await Study.findById({ _id: `${id}` });
    if (!study) {
      return Response.json({ error: 'Lecture not found' }, { status: 404 });
    }
    return Response.json(study);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
