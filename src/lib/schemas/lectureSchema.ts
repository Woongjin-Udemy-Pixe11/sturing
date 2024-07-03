import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewRating: Number,
  reviewName: String,
  reviewContent: String,
  reviewDate: String,
});

const lectureSchema = new mongoose.Schema({
  lectureName: String,
  lectureDescription: String,
  lectureURL: String,
  lectureCategory: String,
  lectureInstructor: String,
  lectureImg: String,
  lectureRating: Number,
  lectureReviews: [reviewSchema],
});

export const lectureModel =
  mongoose.models?.lecturetModel || mongoose.model('lecture', lectureSchema);
