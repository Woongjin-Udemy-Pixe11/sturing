import CollectStudyClient from './_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';

import { TFetchStudy } from '@/types/TStudy';

export default function page() {
  const session = await getSession();
  const id = session?.user?.id;

  const newStudy: TFetchStudy = {
    leaderId: '66860433343dae4084a8c43d',
    studyImage: '1',
    studyName: '재밌는 스터디',
    studyContent: '재밌는 스터디!재밌는 스터디!재밌는 스터디!',
    studyType: '온라인',
    studyLevel: '비기너',
    studyMember: 4,
    studySubject:
      'https://www.udemy.com/course/the-web-developer-bootcamp-2021-korea/',
    studyCategory: '개발테크',
    studyDeadline: '2024-07-01',
    studyStart: '2024-07-04',
    studyEnd: '2024-07-30',
    studyPlace: '추후협의',
    studyMeetings: '추후협의',
  };

  return <>{id && <CollectStudyClient id={id} />}</>;
}
