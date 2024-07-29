import Link from 'next/link';
import MainLabel from './MainLabel';

type TUserCardProps = {
  user: {
    _id: string;
    nickname: string;
    image: string;
    sturingPercent: number;
    studyCount: number;
    matchingInfo?: {
      interests?: string[];
      level?: { [key: string]: string };
      preferRegion?: string[];
      preferMood?: string[];
    };
  };
};

export default function UserCard({ user }: TUserCardProps) {
  const { _id, nickname, image, sturingPercent, studyCount, matchingInfo } =
    user;

  const interest = matchingInfo?.interests?.[0] || '없음';
  const level = matchingInfo?.level?.[interest] || '없음';
  const preferMood = matchingInfo?.preferMood?.[0] || '없음';

  return (
    // TODO: '남'이 보는 마이 페이지 링크 자체 or 여기서 조합해야 함
    <Link
      href={`/users/${_id}`}
      className="w-[13.4rem] flex flex-col gap-[.8rem]"
    >
      <div className="w-full bg-main-200 rounded-[.5rem] p-[1.6rem] flex justify-center items-center flex-col">
        <div className="w-[6rem] h-[6rem] rounded-[50%] overflow-hidden">
          <img
            src={image}
            alt={`${nickname} 프로필 이미지`}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-body-1 font-medium mt-[.8rem] mb-[.4rem]">
          {nickname}
        </span>
        <p className="w-full flex justify-center gap-[.4rem] text-content-1">
          <img src="/small-logo.svg" alt="" />
          <span>지수 {sturingPercent}%</span>
        </p>
      </div>
      <ul className="text-content-2 w-full flex justify-center text-gray-600">
        <li className="font-medium">{level}</li>
        <li className="relative before:content-['|'] before:ml-[0.5rem] before:mr-[0.5rem] before:text-gray-600">
          스터디 <b className="font-medium">{studyCount}회</b>
        </li>
      </ul>
      <ul className="w-full flex justify-center whitespace-nowrap">
        <li>
          <MainLabel content={interest} />
        </li>
        <li>
          <MainLabel content={preferMood} />
        </li>
      </ul>
    </Link>
  );
}
