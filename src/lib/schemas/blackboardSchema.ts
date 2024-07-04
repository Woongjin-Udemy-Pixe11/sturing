import mongoose from 'mongoose';

const blackboardSchema = new mongoose.Schema(
  {
    blackboardWriteId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'user',
    },
    blackboardTitle: { type: String, required: true },
    blackboardContent: { type: String, required: true },
    blackboardImage: { type: String, required: true },
    blackboardViews: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

export const Blackboard =
  mongoose.models.Blackboard || mongoose.model('blackboard', blackboardSchema);
