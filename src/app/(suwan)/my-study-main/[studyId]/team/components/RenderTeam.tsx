'use client';
import { useMemberStore } from '@/store/memberStore';
import { useMyStudyStore } from '@/store/myStudyStore';
import { useEffect } from 'react';

export default function RenderTeam({
  studyId,
  userId,
}: {
  studyId: string;
  userId: string;
}) {
  const { setStudyId, setUserId } = useMyStudyStore();
  const { memberList, fetchMemberList } = useMemberStore();
  useEffect(() => {
    setStudyId(studyId);
    setUserId(userId);
    fetchMemberList();
    console.log('🎁', memberList);
  }, [studyId, userId, fetchMemberList]);

  return null;
}
