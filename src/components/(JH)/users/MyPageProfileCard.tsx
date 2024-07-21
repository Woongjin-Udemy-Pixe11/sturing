import MyPageLabel from './MyPageLabel';
import UserDetailButton from './UserDetailButton';
export default async function MyPageProfileCard({
  data,
  auth,
}: {
  data: any;
  auth?: boolean;
}) {
  return (
    <section className="flex items-center bg-white/[0.95] border border-gray-300 py-[2.4rem] px-[2rem] rounded-md  gap-[1.2rem]">
      <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden">
        {/* //TODO:이미지조절 */}
        <img
          src={`${data.users.image}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex gap-4">
          <h1 className="font-bold text-headline-3">{data.users.nickname}</h1>
          {auth && <UserDetailButton id={data.users._id} />}
        </div>
        {data.matchinginfo && (
          <>
            <h3 className="text-content-2">
              {data.matchinginfo.level[`${data.matchinginfo.interests[0]}`]}
            </h3>
            <div className="flex gap-2 mt-2">
              <MyPageLabel
                content={`🌏 ${data.matchinginfo.preferRegion[0]}`}
              />
              <MyPageLabel content={`${data.matchinginfo.interests[0]}`} />
              <MyPageLabel content={`${data.matchinginfo.preferMood[0]}`} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
