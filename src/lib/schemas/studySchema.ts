import mongoose from 'mongoose';
const studySchema = new mongoose.Schema(
  {
    leaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    studyImage: {
      type: String,
      required: true,
      default: '',
    },
    studyName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30,
    },
    studyContent: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 500,
    },
    studyType: {
      type: String,
      required: true,
      enum: ['온라인', '오프라인', '추후협의'],
    },
    studyLevel: {
      type: String,
      required: true,
      enum: ['비기너', '신입', '주니어', '시니어', '상관없음'],
    },
    studyMember: {
      type: Number,
      required: true,
    },
    studyJoinMember: {
      type: Number,
      required: true,
      default: 0,
    },
    studySubject: {
      type: String,
    },
    studyCategory: {
      type: String,
      enum: [
        '디자인',
        '개발테크',
        '비즈니스',
        '마케팅',
        '경제',
        '외국어',
        '자격증',
        '자기계발',
        '기타',
      ],
    },
    studyViews: {
      type: Number,
      required: true,
      default: 0,
    },
    studyDeadline: {
      type: Date,
      required: true,
    },
    studyStart: {
      type: Date,
      required: true,
    },
    studyEnd: {
      type: Date,
      required: true,
    },
    studyPlace: {
      type: String,
      required: true,
    },
    studyMeetings: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Study =
  mongoose.models?.Study || mongoose.model('study', studySchema);
