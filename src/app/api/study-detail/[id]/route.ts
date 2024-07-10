import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  connectDB();
  const id = params.id;

  if (!id) {
    return Response.json({ error: 'Study ID is required' }, { status: 400 });
  }

  try {
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
