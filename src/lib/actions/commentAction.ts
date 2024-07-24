'use server';

import connectDB from '@/lib/db';
import { Comment } from '../schemas/commentSchema';
import { revalidatePath } from 'next/cache';

// GET
export async function getComments(studyId: string) {
  await connectDB();

  try {
    const comments = await Comment.find({ studyId: `${studyId}` });
    if (!comments) {
      return { success: false, message: 'Comments not found' };
    }

    return { success: true, data: comments };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error' };
  }
}

export async function getComment(commentId: string) {
  await connectDB();

  try {
    const comment = await Comment.findById({ _id: `${commentId}` });
    if (!comment) {
      return { success: false, message: 'Comment not found' };
    }
    return { success: true, data: comment };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error' };
  }
}

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
      commentContent: commentContent,
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

// DELETE
export async function deleteComment(commentId: string) {
  await connectDB();

  try {
    await Comment.findByIdAndDelete({
      _id: `${commentId}`,
    });
    //revalidatePath(`/study-detail/${studyId}`);
    return { success: true, message: 'Success' };
  } catch (error) {
    console.error('Error Comment Form', error);
    return { success: false, message: 'Error Comment Delete' };
  }
}

// UPDATE
export async function updateComment(commentId: string, commentContent: string) {
  await connectDB();

  try {
    const comment = await Comment.findById({ _id: `${commentId}` });
    comment.commentContent = commentContent;
    await comment.save();

    return { success: true, message: 'Success' };
  } catch (error) {
    console.error('Error Comment Form', error);
    return { success: false, message: 'Error Comment Update' };
  }
}
