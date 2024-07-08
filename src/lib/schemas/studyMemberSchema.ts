import mongoose from 'mongoose';
const studyMemberSchema = new mongoose.Schema({
  studyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Study',
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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
  mongoose.model('StudyMember', studyMemberSchema);
