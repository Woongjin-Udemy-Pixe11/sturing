import Image from 'next/image';
import MyPageLabel from './MyPageLabel';
export default async function MyPageProfileCard({
  data,
  auth,
}: {
  data: any;
  auth?: boolean;
}) {
  return (
    <section className="flex border-[0.1rem] border-gray-200 py-[2.4rem] px-[2rem] mt-5 rounded-md  gap-3">
      <div className="w-[7rem] h-[7rem] border border-gray-500 rounded-full ">
        {/* //TODO:이미지조절 */}
        <img src={`${data.users.image}`} className="cover w-full h-full"></img>
      </div>
      <div>
        <div className="flex gap-4">
          <h1 className="font-bold text-headline-3">{data.users.nickname}</h1>
          {auth && <h2>{'>'}</h2>}
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
