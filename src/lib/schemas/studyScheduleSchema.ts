import mongoose from 'mongoose';

const studyScheduleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    title: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Study',
    },
  },
  { timestamps: true },
);

export const StudySchedule =
  mongoose.models?.StudySchedule ||
  mongoose.model('StudySchedule', studyScheduleSchema);
