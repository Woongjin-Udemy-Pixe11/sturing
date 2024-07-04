import mongoose from 'mongoose';

const blackboardCommentSchema = new mongoose.Schema(
  {
    blackboardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'blackboard',
    },
    commentWriteId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    commentContent: { type: String, required: true },
  },
  { timestamps: true },
);

export const BlackboardComment =
  mongoose.models?.BlackboardComment ||
  mongoose.model('BlackboardComment', blackboardCommentSchema);
