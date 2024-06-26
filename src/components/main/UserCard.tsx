import MainLabel from './MainLabel';

type TUserCardProps = {
  userName: string;
  userImage: string;
  intersetName: string;
  intersetLevel: string;
  studyMoodContent: string;
  userIndex: number;
  userStudyCount: number;
};

export default function UserCard(props: TUserCardProps) {
  const {
    userName,
    userImage,
    intersetName,
    intersetLevel,
    studyMoodContent,
    userIndex,
    userStudyCount,
  } = props;

  return (
    <div className="w-[13.4rem] flex flex-col gap-[.8rem]">
      <div className="w-full bg-main-200 rounded-[.5rem] p-[1.6rem] flex justify-center items-center flex-col">
        <img
          src={userImage}
          alt={`${userName} 프로필 이미지`}
          className="w-[6rem] h-[6rem] rounded-[50%]"
        />
        <span className="text-body-1 font-semibold mt-[.8rem] mb-[.4rem]">
          {userName}
        </span>
        <p className="w-full flex justify-center gap-[.4rem] text-content-1">
          <img src="/small-logo.svg" alt="" />
          <span>지수 {userIndex}%</span>
        </p>
      </div>
      <ul className="text-content-2 w-full flex justify-center text-gray-600">
        <li className="font-semibold">{intersetLevel}</li>
        <li className="relative before:content-['|'] before:ml-[0.5rem] before:mr-[0.5rem] before:text-gray-600">
          스터디 <b className="font-semibold">{userStudyCount}회</b>
        </li>
      </ul>
      <ul className="w-full flex justify-center whitespace-nowrap">
        <li>
          <MainLabel content={intersetName} />
        </li>
        <li>
          <MainLabel content={studyMoodContent} />
        </li>
      </ul>
    </div>
  );
}