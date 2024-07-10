import LectureDetailStudyPage from './study/page';
import LectureDetailRatingPage from './rating/page';
import LectureStudyInfo from '../../_components/LectureStudyInfo';

/*
{
  "_id": { "$oid": "668b8760bd5d2440bfaa5083" },
  "lectureName": "COS Pro Python(파이썬) 코딩 자격증 합격하기(1, 2급)",
  "lectureDescription": "COS Pro Python 코딩 자격증 1급 및 2급을 준비하고 합격하는 방법을 배워보세요!",
  "lectureURL": "https://www.udemy.com/course/cos-pro-python-1-2/?couponCode=KRLETSLEARNNOW",
  "lectureCategory": "자격증",
  "lectureInstructor": "Maximilian Schwarzmüller",
  "lectureImg": "https://img-c.udemycdn.com/course/480x270/4208928_b842_2.jpg",
  "lectureRating": { "$numberDouble": "4.7" },
  "lectureReviews": [
    {
      "reviewRating": { "$numberInt": "5" },
      "reviewName": "홍길동",
      "reviewContent": "파이썬 코딩 자격증 준비에 큰 도움이 되었습니다. 감사합니다!",
      "reviewDate": "1주 전",
      "_id": {
        "$oid": "6684cc73a4d416bfcc253c6a"
      }
    },
    {
      "reviewRating": { "$numberInt": "4" },
      "reviewName": "성춘향",
      "reviewContent": "내용이 유익하지만, 조금 더 구체적인 예제가 있었으면 좋겠습니다.",
      "reviewDate": "2주 전",
      "_id": {
        "$oid": "6684cc73a4d416bfcc253c6b"
      }
    },
    {
      "reviewRating": { "$numberInt": "5" },
      "reviewName": "이몽룡",
      "reviewContent": "강의가 매우 실용적이고 자격증 시험 대비에 도움이 많이 되었습니다.",
      "reviewDate": "3주 전",
      "_id": {
        "$oid": "6684cc73a4d416bfcc253c6c"
      }
    }
  ],
  "__v": { "$numberInt": "0" }
}
*/
type TLectureDetailProps = {
  params: { id: string };
};

async function fetchLectureDetail(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture');
  return res.json();
}
async function fetchLectureStudy(id: string) {
  if (!id) throw new Error('Invalid ID');
  const res = await fetch(`${process.env.LOCAL_URL}/api/lecture/study/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch lecture study');
  return res.json();
}

export default async function LectureDetail(props: TLectureDetailProps) {
  const { params } = props;
  const id = params.id;

  const lecture = await fetchLectureDetail(id);
  const lectureStudy = await fetchLectureStudy(id);
  return (
    <div className="flex flex-col mt-[2.8rem]">
      <LectureStudyInfo
        lectureInstructor={lecture.lectureInstructor}
        lectureDescription={lecture.lectureDescription}
      />
      <LectureDetailStudyPage lectureStudy={lectureStudy} />
      <LectureDetailRatingPage
        lectureRating={lecture.lectureRating}
        lectureReviews={lecture.lectureReviews}
      />
    </div>
  );
}
