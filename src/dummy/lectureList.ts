type TLectureList = {
  lectureName: string;
  lectureDescription: string;
  lectureURL: string;
  lectureCategory: string;
  lectureInstructor: string;
  lectureImg: string;
  lectureRating: number;
  lectureReviews: TLectureReviews[];
};
type TLectureReviews = {
  reviewRating: number;
  reviewName: string;
  reviewContent: string;
  reviewDate: string;
};

export const lectureList: TLectureList[] = [
  {
    lectureName: '',
    lectureDescription: '',
    lectureURL: '',
    lectureCategory: '',
    lectureInstructor: '',
    lectureImg: '',
    lectureRating: 4.5,
    lectureReviews: [
      {
        reviewRating: 3.5,
        reviewName: '',
        reviewContent: '',
        reviewDate: '2024.06.16',
      },
    ],
  },
];
