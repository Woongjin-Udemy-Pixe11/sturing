import { currentSearchList } from '@/dummy/searchPage';
import CurrentWord from './CurrentWord';

export default function CurrentSearch({
  data,
  remove,
}: {
  data: any;
  remove: any;
}) {
  return (
    <div className="w-[calc(100% - 3.2rem)] px-[1.6rem] my-[4rem]">
      <p className="flex justify-between mb-[2rem]">
        <span className="text-[1.6rem] ">최근검색어</span>
        <button className="text-content-1 text-gray-600">전체삭제</button>
      </p>
      <ul className="w-full flex items-center justify-start flex-wrap gap-[1.2rem]">
        {data &&
          data.map((currentSearch: any) => (
            <CurrentWord
              key={currentSearch}
              content={currentSearch}
              moveLink={currentSearch}
              remove={() => {
                remove(currentSearch);
              }}
            />
          ))}
      </ul>
    </div>
  );
}
