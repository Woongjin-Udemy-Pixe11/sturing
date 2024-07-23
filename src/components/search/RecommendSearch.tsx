import { recommendSearchList } from '@/constant/recommendSearchList';
import Link from 'next/link';

export default function RecommendSearch() {
  return (
    <>
      <div className="w-[calc(100% - 3.2rem)] px-[1.6rem] my-[4rem]">
        <span className="text-[1.6rem] text-gray-1000">추천 검색어</span>
        <ul className="w-full flex flex-wrap gap-[1.2rem] mt-[2rem]">
          {recommendSearchList &&
            recommendSearchList.map((recommendSearch) => (
              <Link
                href={`${recommendSearch.moveLink}keyword=${recommendSearch.content}`}
                key={recommendSearch.content}
              >
                <li className="border border-main-300 rounded-[.5rem] px-[1.6rem] py-[.8rem] text-main-500">
                  {recommendSearch.content}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
}
