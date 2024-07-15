import { studyMember } from '@/dummy/studyMember';
type TStudyMember = {
  name: string;
  profileImage: string;
  progress?: number;
  isLeader?: boolean;
};

export default function Percent(props: any) {
  const { memberData } = props;
  const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full  bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="w-full border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold ">팀원별 출석률</h2>
          </div>

          <div className="space-y-[2rem] py-[2rem]">
            {memberData.map((member: any) => (
              <div
                key={member._id}
                className="flex items-center space-x-[1rem]"
              >
                <img
                  src={member.userId.image}
                  className="w-[4rem] rounded-full"
                />
                <div className="flex-1 w-[23rem] text-[1.4rem]">
                  <div className="flex items-center">
                    <span className="font-semibold ">
                      {member.userId.nickname}
                    </span>
                    <span className="text-gray-500 m-[.4rem]">
                      {member.isLeader && (
                        <img src="/images/studyLabel/crown.svg"></img>
                      )}
                    </span>
                    <span className="ml-auto font-semibold ">
                      {member.studyProgress}%
                    </span>
                  </div>
                  <ProgressBar progress={member.studyProgress} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
