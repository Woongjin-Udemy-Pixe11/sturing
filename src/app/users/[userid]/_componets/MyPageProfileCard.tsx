import { FaChevronRight } from 'react-icons/fa6';
import MyPageLabel from './MyPageLabel';
export default function MyPageProfileCard({ auth }: { auth?: boolean }) {
  return (
    <section className="flex border-[0.1rem] border-gray-200 py-[2.4rem] px-[2rem] mt-5 rounded-md  gap-3">
      <div className="w-[7rem] h-[7rem] border border-gray-500 rounded-full ">
        <img src="/images/user-card-dummy.png" className="object-fit"></img>
      </div>
      <div>
        <div className="flex gap-4">
          <h1 className="font-bold text-headline-3">웅진님</h1>
          {auth && <h2>{'>'}</h2>}
        </div>
        <h3 className="text-content-2">비기너</h3>
        <div className="flex gap-2 mt-2">
          <MyPageLabel content="🌏 성동구" />
          <MyPageLabel content="디자인" />
          <MyPageLabel content="열정적인" />
        </div>
      </div>
    </section>
  );
}
