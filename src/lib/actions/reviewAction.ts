import { revalidatePath } from 'next/cache';
import { StudyReview } from '../schemas/studyReviewSchema';

export async function insertReview(formData: FormData) {
  const studyId = formData.get('studyId');
  const userId = formData.get('userId');
  const score = formData.get('score');
  const content = formData.get('content');

  console.log(score, content, studyId, userId);
  try {
    const studyReview = new StudyReview({
      studyReviewScore: score,
      studyReviewContent: content,
      studyId: studyId || null,
      userId: userId || null,
    });
    await studyReview.save();
    revalidatePath('/');
    return { success: true, message: 'Success' };
  } catch (error) {
    console.error('Error review:', error);
    return { success: false, message: 'Error review' };
  }
}
