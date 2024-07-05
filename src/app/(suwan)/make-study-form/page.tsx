'use client';
import CollectStudyClient from './_component/CollectStudyClient';
import { getSession } from '@/utils/getSessions';
import { useState, useEffect } from 'react';

export default function page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const newStudy = {
    leaderId: '66860433343dae4084a8c43d',
    studyImage: '1',
    studyName: '재밌는 스터디',
    studyContent: '룰루',
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
  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      const submitStudy = () => {
        fetch('/api/study', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStudy),
        })
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message);
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error('Error:', error);
            setMessage('요청 중 오류가 발생했습니다.');
            setIsSubmitting(false);
          });
      };

      submitStudy();
    }
  }, [isSubmitting]);

  return (
    <>
      {/* <CollectStudyClient /> */}
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? '제출 중...' : 'POST'}
      </button>
      {message && <p>{message}</p>}
    </>
  );
}
