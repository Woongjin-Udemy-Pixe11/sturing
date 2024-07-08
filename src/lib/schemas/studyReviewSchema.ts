import mongoose from 'mongoose';
const studyReviewSchema = new mongoose.Schema(
  {
    studyid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    studyReviewScore: {
      type: Number,
      required: true,
      default: 1,
      enum: [1, 3, 5], // 별로예요(1), 좋아요(3), 최고예요(5)
    },
    studyReviewContent: {
      type: String,
      required: true,
      maxlength: 500,
      immutable: true,
    },
    evaluateduser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true },
);
export const StudyReview =
  mongoose.models?.StudyReview ||
  mongoose.model('StudyReview', studyReviewSchema);
