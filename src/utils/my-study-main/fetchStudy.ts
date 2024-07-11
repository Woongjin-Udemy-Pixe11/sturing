export default async function fetchStudy(studyId: any) {
  const res = await fetch(`http://localhost:3000/api/study?id=${studyId}`);

  return res.json();
}
