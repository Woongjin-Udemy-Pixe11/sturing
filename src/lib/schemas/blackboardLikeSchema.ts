import mongoose from 'mongoose';
const blackboardLikeSchema = new mongoose.Schema({
  likeNumber: { type: Number, required: true },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'blackboard_comment',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});

export const BlackboardLike =
  mongoose.models?.BlackboardLike ||
  mongoose.model('blackboard_like', blackboardLikeSchema);
