//TODO:UserProfile componet 사용할지말지 width 7,9rem 둘중하나

type TUserProfileProps = {
  url: string;
  center?: boolean;
};

export default function UserProfile(props: TUserProfileProps) {
  const { url, center } = props;
  const centercss = center && 'm-auto';
  return (
    <div
      className={`w-[7rem] h-[7rem] border border-gray-500 rounded-full ${centercss}`}
    >
      <img src={`${url}`} className="object-fit"></img>
    </div>
  );
}
