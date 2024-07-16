export async function fetchLecture(lectureId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureURL`,
  );

  return res.json();
}

export async function fetchStudy(studyId: any) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/study?id=${studyId}`);

  return res.json();
}

export async function fetchMember(studyId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-member?studyId=${studyId}`,
  );
  return res.json();
}

export async function fetchNoticeList(studyId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/notice?studyId=${studyId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchNotice(noticeId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/notice?noticeId=${noticeId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
