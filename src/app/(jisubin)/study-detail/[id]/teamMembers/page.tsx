import StudyTeamMembers from '../../_components/StudyTeamMembers';

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
