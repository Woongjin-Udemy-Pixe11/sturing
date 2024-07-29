import { searchLabelList } from '@/constant/searchLabelList';
import Link from 'next/link';
import ScrollableContainer from '../common/ScrollableContainer';

export default function SearchLabelList() {
  return (
    <div className="px-[1.6rem] mb-[4rem]">
      <ScrollableContainer>
        {searchLabelList &&
          searchLabelList.map((label) => (
            <li key={label.title}>
              <Link
                href={`/search/result?field=${label.title}`}
                className="flex gap-[0.8rem] px-[1rem] py-[0.6rem] rounded-[2.5rem] border border-gray-400 cursor-pointer items-center justify-center"
              >
                <figure className="relative w-[3.2rem] h-[3.2rem] bg-gray-200 rounded-[50%] flex items-center justify-center">
                  <img
                    src={label.imgSrc}
                    alt={label.imgAlt}
                    className="w-[1.6rem] h-[1.6rem]"
                  />
                  <figcaption className="sr-only">
                    {label.title}를 검색하러 이동합니다.
                  </figcaption>
                </figure>
                <span className="whitespace-nowrap text-content-1">
                  {label.title}
                </span>
              </Link>
            </li>
          ))}
      </ScrollableContainer>
    </div>
  );
}
