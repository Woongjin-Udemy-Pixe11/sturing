import mongoose from 'mongoose';

const blackboardCommentSchema = new mongoose.Schema(
  {
    blackboardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Blackboard',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    comment: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

export const BlackboardComment =
  mongoose.models?.BlackboardComment ||
  mongoose.model('BlackboardComment', blackboardCommentSchema);
