import mongoose from 'mongoose';
const studyKeyword = new mongoose.Schema({
  studyID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'study',
  },
  studyKeywordName: { type: String, required: true },
});

export const StudyKeyword =
  mongoose.models?.StudyKeyword || mongoose.model('StudyKeyword', studyKeyword);
