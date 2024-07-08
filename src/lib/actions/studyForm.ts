'use server';

import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { revalidatePath } from 'next/cache';

// insert
export async function insertStudyForm(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');
  const studyId = formData.get('studyId');
  const userId = formData.get('userId');
  console.log('Received form data:', { title, content, studyId, userId });

  await connectDB();

  if (!title || !content) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  try {
    const studyForm = new StudyForm({
      studyFormTitle: title,
      studyFormContent: content,
      studyId: studyId || null,
      userId: userId || null,
    });

    if (image) {
      // 이미지 처리 로직
    }

    await studyForm.save();
    revalidatePath('/');
    return { success: true, message: 'Success' };
  } catch (error) {
    console.error('Error study form:', error);
    return { success: false, message: 'Error study form' };
  }
}

// Read
export async function getStudyForm(id: string) {
  await connectDB();

  try {
    const studyForm = await StudyForm.findById(id);
    if (!studyForm) {
      return { success: false, message: 'Study form not found' };
    }
    return { success: true, data: studyForm };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error' };
  }
}

// Delete
export async function deleteStudyForm(id: string) {
  await connectDB();

  try {
    const deletedForm = await StudyForm.findByIdAndDelete(id);

    if (!deletedForm) {
      return { success: false, message: 'Study form not found' };
    }

    revalidatePath('/');
    return { success: true, message: 'Deleted successfully' };
  } catch (error) {
    console.error('Error :', error);
    return { success: false, message: 'Error' };
  }
}
