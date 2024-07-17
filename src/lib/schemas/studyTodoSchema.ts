import mongoose from 'mongoose';

const studyTodoSchema = new mongoose.Schema(
  {
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    todoListId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'StudyTodoList',
    },
    todoContent: { type: String, required: true },
    todoCompleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

export const StudyTodo =
  mongoose.models?.StudyTodo || mongoose.model('StudyTodo', studyTodoSchema);
