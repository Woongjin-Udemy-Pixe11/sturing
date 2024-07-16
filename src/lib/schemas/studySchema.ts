import mongoose from 'mongoose';
const studySchema = new mongoose.Schema(
  {
    leaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    studyImage: {
      type: String,
    },
    studyName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
    },
    studyContent: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 500,
    },
    studyType: {
      type: String,
      required: true,
      enum: ['온라인', '오프라인'],
    },
    studyLevel: {
      type: String,
      required: true,
    },
    studyMember: {
      type: Number,
      required: true,
    },
    studyJoinMember: {
      type: Number,
      default: 1,
    },
    studyLecture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lecture',
    },
    studyCategory: {
      type: String,
    },
    studyViews: {
      type: Number,
      required: true,
      default: 0,
    },
    studyDeadline: {
      type: Date,
      required: true,
    },
    studyStart: {
      type: Date,
      required: true,
    },
    studyEnd: {
      type: Date,
      required: true,
    },
    studyPlace: {
      type: String,
      required: true,
    },
    studyMeetings: {
      type: String,
      required: true,
    },
    studyMood: {
      type: Array,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

export const Study =
  mongoose.models?.Study || mongoose.model('Study', studySchema);
