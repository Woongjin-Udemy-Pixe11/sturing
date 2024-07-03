import mongoose from 'mongoose';
const studyMemberSchema = new mongoose.Schema({
  studyId: {
    type: Number,
    required: true,
    ref: 'study',
  },
  userId: {
    type: Number,
    required: true,
    ref: 'user',
  },
  studyProgress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
});
export const StudyMember =
  mongoose.models?.StudyMember ||
  mongoose.model('study_member', studyMemberSchema);
