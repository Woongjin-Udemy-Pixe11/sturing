export default function Percent() {
  type TStudyMember = {
    name: string;
    profileImage: string;
    progress?: number;
    isLeader?: boolean;
  };

  const teamMembers: TStudyMember[] = [
    {
      name: '갓생살자',
      profileImage: '/images/ungin_profile.png',
      progress: 90,
      isLeader: true,
    },
    {
      name: '마스터',
      profileImage: '/images/ungin_profile.png',
      progress: 85,
    },
    { name: '웅진', profileImage: '/images/ungin_profile.png', progress: 70 },
    {
      name: '취뽀기원',
      profileImage: '/images/ungin_profile.png',
      progress: 70,
    },
  ];

  const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
  return (
    <>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[90%] rounded-[5px] bg-white border border-gray-300">
        <div className="mx-auto bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">팀원별 진척도</h2>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-4">
                <img
                  src={member.profileImage}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{member.name}</span>
                    <span className="text-sm text-gray-500">
                      {member.isLeader && (
                        <span className="text-yellow-500">🌟</span>
                      )}
                    </span>
                    <span className="font-semibold text-lg">
                      {member.progress}%
                    </span>
                  </div>
                  <ProgressBar progress={member.progress} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
