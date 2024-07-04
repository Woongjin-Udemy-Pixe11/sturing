import mongoose from 'mongoose';
const matchingSchema = new mongoose.Schema({
  userid: { type: String },
  interests: { type: Array },
  level: { type: Object },
  studyType: { type: String },
  preferRegion: { type: Array },
  preferMood: { type: Array },
});
export const Matching =
  mongoose.models?.matching || mongoose.model('matching', matchingSchema);
