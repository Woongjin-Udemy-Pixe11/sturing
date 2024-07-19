import mongoose from 'mongoose';

const blackboardSchema = new mongoose.Schema(
  {
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Study',
    },
    writerId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    type: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    views: { type: Number, required: true, default: 0 },
    icons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'BlackboardIcon',
      },
    ],
  },
  { timestamps: true },
);

export const Blackboard =
  mongoose.models.Blackboard || mongoose.model('Blackboard', blackboardSchema);
