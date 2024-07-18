import mongoose from 'mongoose';
const blackboeadIconSchema = new mongoose.Schema({
  iconName: {
    type: String,
    required: true,
    enum: ['check', 'heart', 'thumb', 'smile', 'clap', 'sad'],
  },
  blackboardId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Blackboard',
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  ],
});

export const BlackboardIcon =
  mongoose.models?.BlackboardIcon ||
  mongoose.model('BlackboardIcon', blackboeadIconSchema);
