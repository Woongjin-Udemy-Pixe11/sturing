import mongoose from 'mongoose';

const studyMemberSchema = new mongoose.Schema({
  studyID: [
    { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'study' },
  ],
  userID: { type: String },
  study_progress: { type: Number },
});
const studySchema = new mongoose.Schema({
  leaderID: { type: String },
});

const memberModel = mongoose.model('member', studyMemberSchema);
const studyModel = mongoose.model('study', studySchema);

const member = memberModel.find({}).populate('study');
