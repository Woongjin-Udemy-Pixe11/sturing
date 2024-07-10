import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';

export async function POST(request: Request) {
  try {
    await connectDB();

    const { studyFormId, action } = await request.json();

    let updateData: {
      studyFormRead: boolean;
      studyFormSure: boolean;
    } = {
      studyFormRead: true,
      studyFormSure: false,
    };

    if (action === 'accept') {
      updateData.studyFormSure = true;
    }

    const updateStatus = await StudyForm.findByIdAndUpdate(
      studyFormId,
      updateData,
      { new: true },
    );

    if (!updateStatus) {
      return Response.json(
        { success: false, error: 'Study form not found' },
        { status: 404 },
      );
    }

    return Response.json({ success: true, data: updateStatus });
  } catch (error) {
    console.error('Error study form:', error);
    return Response.json(
      { success: false, error: 'Failed to update study form' },
      { status: 500 },
    );
  }
}
