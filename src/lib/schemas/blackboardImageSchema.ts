import mongoose from 'mongoose';

const blackboardImageSchema = new mongoose.Schema({
  blackboardImage: { type: String, required: true },
  blackboardId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'blackboard',
  },
});

export const BlackboardImage =
  mongoose.models?.BlackboardImage ||
  mongoose.model('blackboard_image', blackboardImageSchema);
