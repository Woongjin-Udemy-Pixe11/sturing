import mongoose from 'mongoose';
const studyTodoListSchema = new mongoose.Schema({
  studyTodoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'study_todo',
  },
});

const studyTodoSchema = new mongoose.Schema(
  {
    studyTodoContent: { type: String, required: true },
    studyTodoCompleted: { type: Boolean, required: true, default: false },
    studyTodoWriteID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true },
);

export const StudyTodoList =
  mongoose.models?.StudyTodoList ||
  mongoose.model('StudyTodoList', studyTodoListSchema);

export const StudyTodo =
  mongoose.models?.StudyTodo || mongoose.model('StudyTodo', studyTodoSchema);
