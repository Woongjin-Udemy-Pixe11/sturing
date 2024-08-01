import Link from 'next/link';
import { HiLocationMarker } from 'react-icons/hi';
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
    <section className="flex items-center bg-white/[0.95] border border-gray-300 py-[2.4rem] px-[2rem] rounded-[.5rem] gap-[1.2rem]">
      <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden flex-shrink-0">
        {/* //TODO:이미지조절 */}
        <img
          src={`${data.users.image}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-[.3rem]">
        <Link
          href={`/users/${data.users._id}/detail`}
          className="flex gap-[.5rem] mb-[.2rem]"
        >
          <h1 className="font-semibold text-headline-3">
            {data.users.nickname}
          </h1>
          {auth && <UserDetailButton id={data.users._id} />}
        </Link>
        {data.matchinginfo && (
          <>
            <h3 className="text-content-2 font-medium">
              {data.matchinginfo.level[`${data.matchinginfo.interests[0]}`]}
            </h3>
            <div className="flex gap-2 mt-2">
              <MyPageLabel
                icon={<HiLocationMarker className="text-content-1" />}
                content={`${data.matchinginfo.preferRegion[0]}`}
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
