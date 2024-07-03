import mongoose from 'mongoose';

const studyScheduleSchema = new mongoose.Schema({
  studyLeaderId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'user',
  },
  studyScheduleTitle: { type: String, required: true },
  studySchedulePlace: { type: String, required: true },
  studyScheduleDate: { type: Date, required: true },
  studyId: { type: String, required: true },
});

export const StudySchedule =
  mongoose.models?.StudySchedule ||
  mongoose.model('study_schedule', studyScheduleSchema);
