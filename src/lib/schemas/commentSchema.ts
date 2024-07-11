import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
  commentId: String,
  commentWriteId: String,
  commnetContent: String,
  commentDate: String,
  studyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Study',
  },
});
export const Comment =
  mongoose.models?.Comment || mongoose.model('comment', commentSchema);
