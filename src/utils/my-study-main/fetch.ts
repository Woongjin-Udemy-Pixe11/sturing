export async function fetchStudy(studyId: any) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/study?id=${studyId}`);

  return res.json();
}

export async function fetchLecture(lectureId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureURL`,
  );

  return res.json();
}
