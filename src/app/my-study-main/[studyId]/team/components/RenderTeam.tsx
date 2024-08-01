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
}): null {
  const { setStudyId, setUserId } = useMyStudyStore();
  const { memberList, fetchMemberList } = useMemberStore();
  useEffect(() => {
    setStudyId(studyId);
    setUserId(userId);
    fetchMemberList();
  }, [studyId, userId, fetchMemberList]);

  return null;
}
