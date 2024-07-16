import mongoose from 'mongoose';
const bookmarkSchema = new mongoose.Schema({
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});
export const Bookmark =
  mongoose.models?.bookmark || mongoose.model('bookmark', bookmarkSchema);
