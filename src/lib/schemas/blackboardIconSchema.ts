import mongoose from 'mongoose';
const blackboeadIconSchema = new mongoose.Schema({
  iconName: { type: String, required: true },
  iconCount: { type: Number, required: true },
  blackboardId: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'blackboard',
  },
});

export const BlackboardIcon =
  mongoose.models?.BlackboardIcon ||
  mongoose.model('BlackboardIcon', blackboeadIconSchema);
