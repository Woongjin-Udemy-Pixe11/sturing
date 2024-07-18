import mongoose from 'mongoose';

const studyTodoSchema = new mongoose.Schema(
  {
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    todoContent: { type: String, required: true },
    todoCompleted: { type: Boolean, required: true, default: false },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

export const StudyTodo =
  mongoose.models?.StudyTodo || mongoose.model('StudyTodo', studyTodoSchema);
