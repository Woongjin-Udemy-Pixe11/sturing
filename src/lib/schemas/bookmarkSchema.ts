import mongoose from 'mongoose';
const bookmarkSchema = new mongoose.Schema({
  targetid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});
export const Bookmark =
  mongoose.models?.bookmark || mongoose.model('bookmark', bookmarkSchema);
