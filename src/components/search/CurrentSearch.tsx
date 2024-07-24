import CurrentWord from './CurrentWord';

type CurrentSearchProps = {
  data: string[];
  remove: (search: string) => void;
  clear: () => void;
};

export default function CurrentSearch(props: CurrentSearchProps) {
  const { data, remove, clear } = props;
  return (
    <div className="w-full my-[4rem]">
      <p className="flex justify-between mb-[2rem]">
        <span className="text-[1.6rem] ">최근검색어</span>
        <button className="text-content-1 text-gray-600" onClick={clear}>
          전체삭제
        </button>
      </p>
      <ul className="w-full flex items-center justify-start flex-wrap gap-[1.2rem]">
        {data &&
          data.map((currentSearch: any) => (
            <CurrentWord
              key={currentSearch}
              content={currentSearch}
              moveLink={`search/result?keyword=${currentSearch}`}
              remove={() => {
                remove(currentSearch);
              }}
            />
          ))}
      </ul>
    </div>
  );
}
