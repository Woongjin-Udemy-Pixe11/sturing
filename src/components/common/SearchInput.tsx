import { IoSearch } from 'react-icons/io5';

export default function SearchInput() {
  return (
    <>
      <label
        htmlFor="search-input"
        className="block w-[calc(100% - 3.2rem)] mx-[1.6rem] mt-[2rem] bg-main-100 flex justify-between px-[2rem] rounded-[2.5rem]"
      >
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="관심 스터디 분야나 강의명을 검색해 보세요"
          className="w-[27rem] inline-block bg-inherit py-[1.3rem] pr-[2rem] text-content-1 placeholder-gray-700"
        />
        <button>
          <IoSearch className="w-[2.4rem] h-[2.4rem] text-main-600" />
        </button>
      </label>
    </>
  );
}
