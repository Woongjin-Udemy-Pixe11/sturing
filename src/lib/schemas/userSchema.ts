import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    studyType: [
      { type: mongoose.Schema.Types.ObjectId, require: false, ref: 'matching' },
    ],
    sturingPercent: {
      type: Number,
      required: true,
    },
    studyCount: {
      type: Number,
      required: true,
    },
    authProviderId: { type: String },
    // role: {
    //   type: String,
    //   required: true,
    //   enum: ["user", "admin"],
    //   default: "user",
    // },
  },
  { timestamps: true },
);
export const User = mongoose.models?.User || mongoose.model('User', userSchema);
