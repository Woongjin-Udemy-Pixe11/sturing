type TLectures = {
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

export const lectures: TLectures[] = [
  {
    lectureName: '【한글자막】 Next.js 14 & React - 완벽 가이드',
    lectureDescription:
      '앱 라우터 또는 페이지 라우터로 NextJS 14를 기초부터 학습하고, 풀스택 ReactJS + NextJS 앱을 구축하세요!',
    lectureURL:
      'https://www.udemy.com/course/nextjs-react-incl-two-paths/?couponCode=KRLETSLEARNNOW',
    lectureCategory: '개발 테크',
    lectureInstructor: 'Maximilian Schwarzmüller',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4699864_c9d5_3.jpg',
    lectureRating: 4.8,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '임호정',
        reviewContent:
          '재밌고, 이해가 잘 되게 강의가 보람찹니다. 양질의 강의를 제공해주셔서 감사합니다.',
        reviewDate: '1개월 전',
      },
      {
        reviewRating: 5,
        reviewName: 'Random112',
        reviewContent:
          '강사의 자세한 설명과 주기적인 업데이트로 비슷한 강의를 추가 구매할 이유가 줄어들어서 좋음영어 버전은 이미 App router 기반을 메인으로 4월에 업데이트가 되었는데 한글 버전 업데이트도 빠르게 해주세요',
        reviewDate: '2개월 전',
      },
      {
        reviewRating: 5,
        reviewName: '박진우',
        reviewContent:
          'There is no feedback on NextJS 13 version in this lesson.',
        reviewDate: '9개월 전',
      },
    ],
  },
  {
    lectureName: 'COS Pro Python(파이썬) 코딩 자격증 합격하기(1, 2급)',
    lectureDescription:
      'COS Pro Python 코딩 자격증 1급 및 2급을 준비하고 합격하는 방법을 배워보세요!',
    lectureURL:
      'https://www.udemy.com/course/cos-pro-python-1-2/?couponCode=KRLETSLEARNNOW',
    lectureCategory: '자격증',
    lectureInstructor: 'Maximilian Schwarzmüller', // 예시 강사 이름으로 변경
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4208928_b842_2.jpg', // 강의 이미지 URL 예시
    lectureRating: 4.7, // 예시 평점
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '홍길동',
        reviewContent:
          '파이썬 코딩 자격증 준비에 큰 도움이 되었습니다. 감사합니다!',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '성춘향',
        reviewContent:
          '내용이 유익하지만, 조금 더 구체적인 예제가 있었으면 좋겠습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '이몽룡',
        reviewContent:
          '강의가 매우 실용적이고 자격증 시험 대비에 도움이 많이 되었습니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName: '처음 시작하는 MySQL DataBase',
    lectureDescription:
      'MySQL 데이터베이스의 기초부터 고급 개념까지 학습하고, 실습을 통해 실제 프로젝트에 적용해보세요!',
    lectureURL: 'https://www.udemy.com/course/softcampus-mysql/',
    lectureCategory: '개발 테크',
    lectureInstructor: 'Softcampus Academy',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/1450064_3918.jpg',
    lectureRating: 4.9,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '김기수',
        reviewContent:
          'MySQL의 기초를 체계적으로 배울 수 있어서 좋았습니다. 강사님의 설명이 명확하고 실습 예제도 훌륭합니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '지수빈',
        reviewContent:
          '초보자에게 매우 유익한 강의입니다. 다만, 중급 이상의 내용을 더 다루어주었으면 좋겠습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '박민수',
        reviewContent:
          '강의 내용이 잘 정리되어 있고, 실습이 많아서 이해하기 쉬웠습니다. 강추합니다!',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName: '우리 조직에 맞는 LLM 도입 및 활용 방안',
    lectureDescription:
      '대규모 언어 모델(LLM)을 조직 내에 효과적으로 도입하고 활용하는 방법을 배워보세요. 이 강의는 실질적인 도입 전략부터 구체적인 활용 사례까지 다룹니다.',
    lectureURL: 'https://www.udemy.com/course/2econsulting/',
    lectureCategory: '비즈니스',
    lectureInstructor: 'Jane Smith',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/6000272_4593_3.jpg',
    lectureRating: 4.7,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '조민수',
        reviewContent:
          'LLM 도입의 모든 단계를 체계적으로 설명해주셔서 큰 도움이 되었습니다. 실무에 바로 적용할 수 있는 팁들이 많았습니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '박은영',
        reviewContent:
          '내용이 충실하고 실제 사례를 많이 다루어서 이해하기 쉬웠습니다. 다만, 일부 내용이 조금 더 구체적이었으면 좋겠습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '김준호',
        reviewContent:
          'LLM을 처음 접하는 사람들에게 매우 유용한 강의입니다. 강사님의 설명이 명확하고 실습 예제가 많아서 실용적입니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName:
      '【한글자막】 웹 디자인 마스터 과정: Figma부터 Webflow, 프리랜서 활동까지',
    lectureDescription:
      'Figma와 Webflow를 사용하여 웹 디자인을 마스터하고, 프리랜서로서의 활동까지 배우는 포괄적인 과정입니다.',
    lectureURL:
      'https://www.udemy.com/course/web-design-figma-webflow-freelancing/',
    lectureCategory: '디자인',
    lectureInstructor: 'John Doe',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4642664_fe5d_9.jpg',
    lectureRating: 4.9,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '이현우',
        reviewContent:
          'Figma와 Webflow를 처음 접하는 사람들에게 매우 유익한 강의입니다. 강사님의 설명이 명확하고 실습 예제가 많아 쉽게 따라할 수 있었습니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '김민지',
        reviewContent:
          '강의 내용이 충실하고 실질적인 팁이 많았습니다. 다만, 프리랜서 활동 부분이 조금 더 자세했으면 좋겠습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '박지훈',
        reviewContent:
          '웹 디자인의 기초부터 고급까지 체계적으로 배울 수 있어서 좋았습니다. 특히 실습이 많아 실무에 바로 적용할 수 있었습니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName:
      '【월스트리트】 금융 전문가에게 배우는 글로벌 경제 분석과 주식 투자 전략',
    lectureDescription:
      '금융 전문가로부터 글로벌 경제 분석과 주식 투자 전략을 배우는 과정입니다. 경제 지표의 이해부터 투자 전략 수립까지 체계적으로 학습할 수 있습니다.',
    lectureURL:
      'https://www.udemy.com/course/cloom-global-economic-analysis/?couponCode=KRLETSLEARNNOW',
    lectureCategory: '경제',
    lectureInstructor: 'Jane Smith',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4766716_765f.jpg',
    lectureRating: 4.8,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '최민호',
        reviewContent:
          '경제 지표를 분석하는 방법과 주식 투자 전략을 쉽게 배울 수 있어서 좋았습니다. 실무에 적용할 수 있는 유용한 팁들이 많았습니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '박은영',
        reviewContent:
          '내용이 매우 충실하고 실질적인 예제가 많았습니다. 다만, 초보자에게는 다소 어려울 수 있는 내용도 포함되어 있습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '이준호',
        reviewContent:
          '글로벌 경제를 이해하고 주식 투자 전략을 수립하는 데 큰 도움이 되었습니다. 강사님의 설명이 명확하고 이해하기 쉬웠습니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName:
      '【한글자막】 온라인 마케팅 : SEO 및 소셜 미디어 마케팅 전략 완벽 강의',
    lectureDescription:
      'SEO 및 소셜 미디어 마케팅 전략을 완벽하게 마스터하는 강의입니다. 최신 마케팅 트렌드와 실무 적용 방법을 배우세요.',
    lectureURL:
      'https://www.udemy.com/course/online-marketing-seo/?couponCode=KRLETSLEARNNOW',
    lectureCategory: '마케팅',
    lectureInstructor: 'Michael Brown',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4563878_8d5d_15.jpg',
    lectureRating: 4.7,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '문종후',
        reviewContent:
          'SEO와 소셜 미디어 마케팅에 대한 종합적인 강의입니다. 실질적인 예제와 팁들이 많아서 매우 유익했습니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '이정민',
        reviewContent:
          '내용이 매우 충실하고 강사님의 설명이 이해하기 쉬웠습니다. 다만, 초보자에게는 다소 어려울 수 있는 부분도 있었습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '박지현',
        reviewContent:
          '최신 마케팅 트렌드를 반영한 강의 내용이 매우 유익했습니다. 실무에 바로 적용할 수 있는 팁들이 많아서 좋았습니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName: '하루 10분 오피스 요가',
    lectureDescription:
      '일상에서 쉽게 따라 할 수 있는 10분 사무실 요가. 업무 중 짧은 시간을 활용해 스트레스를 줄이고 건강을 증진하세요.',
    lectureURL: 'https://www.udemy.com/course/10-minutes-daily-office-yoga/',
    lectureCategory: '건강 및 피트니스',
    lectureInstructor: 'John Doe',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/1163192_135e_3.jpg',
    lectureRating: 4.9,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '김예진',
        reviewContent:
          '짧은 시간 내에 따라 할 수 있는 요가 동작들이 매우 유익합니다. 업무 중간에 하기 딱 좋아요.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '박민수',
        reviewContent:
          '간단하고 효과적인 요가 동작들이 많이 포함되어 있습니다. 다만, 좀 더 다양한 동작이 있었으면 좋겠습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '이정민',
        reviewContent:
          '강사님의 설명이 명확하고 쉽게 따라 할 수 있습니다. 매일 10분씩 투자할 가치가 있습니다.',
        reviewDate: '3주 전',
      },
    ],
  },
  {
    lectureName: 'New 쁘리벳 초급 러시아어 회화',
    lectureDescription:
      '초보자를 위한 쁘리벳(Russian) 언어의 기초를 배우고, 일상 회화에 필요한 표현과 문법을 익히세요.',
    lectureURL: 'https://www.udemy.com/course/new-mbxq/',
    lectureCategory: '언어',
    lectureInstructor: 'Natalia Ivanova',
    lectureImg: 'https://img-b.udemycdn.com/course/480x270/4328644_4a3a.jpg',
    lectureRating: 4.5,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '김지민',
        reviewContent:
          '러시아어를 전혀 몰라도 따라가기 쉬운 강의입니다. 감사합니다!',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 4,
        reviewName: '이영희',
        reviewContent: '일상 대화에 유용한 표현들이 많이 있어서 좋았습니다.',
        reviewDate: '6주 전',
      },
      {
        reviewRating: 4,
        reviewName: '강진희',
        reviewContent:
          '강사의 설명이 명확하고 예제도 잘 설명해 주셔서 좋았습니다.',
        reviewDate: '9주 전',
      },
    ],
  },
  {
    lectureName: '【한글자막】 Android 14 및 Kotlin 개발 완전 정복하기',
    lectureDescription:
      'Android 앱 개발을 위한 Kotlin 언어와 최신 기술들을 배우고, 실전 프로젝트를 통해 실력을 향상시키세요!',
    lectureURL:
      'https://www.udemy.com/course/best-android-12-kotlin/?couponCode=KRLETSLEARNNOW',
    lectureCategory: '개발테크',
    lectureInstructor: 'Denis Panjuta',
    lectureImg: 'https://img-c.udemycdn.com/course/480x270/4398694_beea_3.jpg',
    lectureRating: 4.6,
    lectureReviews: [
      {
        reviewRating: 5,
        reviewName: '양지민',
        reviewContent:
          '정말 유익한 강의였습니다. 강사님 설명이 매우 이해하기 쉬웠습니다.',
        reviewDate: '1주 전',
      },
      {
        reviewRating: 4,
        reviewName: '김서연',
        reviewContent: '내용이 방대해서 몇 번을 다시 들어야 할 것 같습니다.',
        reviewDate: '2주 전',
      },
      {
        reviewRating: 5,
        reviewName: '최민준',
        reviewContent: '실전 프로젝트를 통해 배운 것이 많습니다. 감사합니다!',
        reviewDate: '8주 전',
      },
    ],
  },
];
