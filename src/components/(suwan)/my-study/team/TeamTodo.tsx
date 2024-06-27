export default function TeamTodo() {
  type TStudyMember = {
    name: string;
    profileImage: any;
    progress?: number;
    isLeader?: boolean;
  };

  const teamMembers: TStudyMember[] = [
    { name: '웅진', profileImage: '/images/ungin_profile.png' },
    { name: '갓생살자', profileImage: '/images/ungin_profile.png' },
    { name: '취뽀기원', profileImage: '/images/ungin_profile.png' },
    { name: '마스터', profileImage: '/images/ungin_profile.png' },
  ];

  const Task: React.FC<{ task: string; checked: boolean }> = ({
    task,
    checked,
  }) => (
    <div className="flex items-center space-x-2">
      <div
        className={`w-4 h-4 rounded-full border-2 ${
          checked ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
        }`}
      >
        {checked && (
          <span className="block w-2 h-2 bg-white rounded-full mx-auto mt-1"></span>
        )}
      </div>
      <span className="text-sm">{task}</span>
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] rounded-[5px] bg-white border border-gray-300">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">팀원별 현황</h2>
            <span className="text-sm text-gray-500">06.03(월)</span>
          </div>
          <div className="flex justify-around items-center mb-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <img
                  src={member.profileImage}
                  className="w-12 h-12 rounded-full"
                />
                <span className="mt-2 text-sm">{member.name}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Task task="1강 5분 복습하기" checked={true} />
            <Task task="2강 듣고 과제노트 작성하기" checked={false} />
          </div>
        </div>
      </div>
    </>
  );
}
