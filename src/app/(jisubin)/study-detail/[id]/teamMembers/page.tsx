import { dummyMemberInfo } from '@/dummy/memberInfo';
import Image from 'next/image';
import StudyTeamMembers from '../../_components/StudyTeamMembers';

// type TTeamMembersPageProps = {
//   level: string;
//   leaderId: string;
//   member: number;
//   joinMember: number;
// };

type TTeamMembersPageProps = {
  params: { id: string };
};

export default function TeamMembersPage(props: TTeamMembersPageProps) {
  const { params } = props;
  const id = params.id;
  return (
    <>
      <StudyTeamMembers id={id} />
    </>
  );
}
