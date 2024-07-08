import mongoose from 'mongoose';
const studyFormSchema = new mongoose.Schema(
  {
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
      required: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    studyFormTitle: {
      type: String,
      required: true,
      maxlength: 24,
      immutable: true,
    },
    studyFormContent: {
      type: String,
      required: true,
      maxlength: 500,
      immutable: true,
    },
    studyFormRead: {
      type: Boolean,
      required: true,
      default: false,
    },
    studyFormSure: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

export const StudyForm =
  mongoose.models?.StudyForm || mongoose.model('StudyForm', studyFormSchema);
