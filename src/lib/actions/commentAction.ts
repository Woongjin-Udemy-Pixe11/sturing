'use server';

import connectDB from '@/lib/db';
import { Comment } from '../schemas/commentSchema';
import { revalidatePath } from 'next/cache';

// POST
export async function postComment(formData: FormData) {
  const commentContent = formData.get('comment');
  const commentWriteId = formData.get('userId');
  const studyId = formData.get('studyId');

  console.log('Received form data: ', {
    commentContent,
    commentWriteId,
    studyId,
  });

  await connectDB();

  if (!commentContent || !commentWriteId) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  try {
    const commentForm = new Comment({
      commentWriteId: commentWriteId,
      commnetContent: commentContent,
      studyId: studyId,
    });
    await commentForm.save();
    revalidatePath(`/study-detail/${studyId}`);
    return { success: true, message: 'Success' };
  } catch (error) {
    console.error('Error Comment Form', error);
    return { success: false, message: 'Error Comment Form' };
  }
}
