export type TLectureReview = {
  _id: string;
  reviewRating: number;
  reviewName: string;
  reviewContent: string;
  reviewDate: string;
};

export type TLectureDetail = {
  _id: string;
  lectureName: string;
  lectureDescription: string;
  lectureURL: string;
  lectureCategory: string;
  lectureInstructor: string;
  lectureImg: string;
  lectureRating: number;
  lectureReviews: TLectureReview[];
};
