import ScrollableContainer from '../common/ScrollableContainer';
import { searchLabelList } from '@/constant/searchLabelList';

export default function SearchLabelList() {
  return (
    <ScrollableContainer>
      {searchLabelList &&
        searchLabelList.map((label) => (
          <li
            key={label.title}
            className="flex gap-[0.8rem] px-[0.8rem] py-[0.6rem] rounded-[2.5rem] border-2 cursor-pointer"
          >
            <figure className="w-[2.4rem] h-[2.4rem] bg-gray-200 rounded-[50%] flex items-center  justify-center">
              <img
                src={label.imgSrc}
                alt={label.imgAlt}
                className="w-[1.6rem] h-[1.6rem]"
              />
              <figcaption className="sr-only">
                {label.title}를 검색하러 이동합니다.
              </figcaption>
            </figure>
            <span className="whitespace-nowrap">{label.title}</span>
          </li>
        ))}
    </ScrollableContainer>
  );
}
