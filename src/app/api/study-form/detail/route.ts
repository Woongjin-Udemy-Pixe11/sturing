import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';

export async function GET(req: Request) {
  await connectDB();
  const url = new URL(req.url);
  const studyId = url.searchParams.get('studyid');
  const userId = url.searchParams.get('userid');
  let studyForm = await StudyForm.findOne({ userId: userId, studyId: studyId });
  return new Response(JSON.stringify(studyForm), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
