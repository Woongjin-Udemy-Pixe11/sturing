import mongoose from 'mongoose';
const bookmarkSchema = new mongoose.Schema({
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'targetModel',
  },
  targetModel: {
    type: String,
    required: true,
    enum: ['Study', 'Lecture'],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});
export const Bookmark =
  mongoose.models?.Bookmark || mongoose.model('bookmark', bookmarkSchema);
