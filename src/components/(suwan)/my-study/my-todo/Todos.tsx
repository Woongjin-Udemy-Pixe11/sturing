export default function Todos() {
  return (
    <>
      <div className="flex flex-row justify-start items-start flex-grow-0 flex-shrink-0 w-[90%] gap-3 px-5 py-6 rounded-[5px] bg-white border border-[#e4e4e4]">
        <div className="flex">
          <span className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left">
            체크리스트
          </span>
          <span className="font-semibold text-left text-[#4171ff]">3</span>
          <img src="/images/studyLabel/add.svg" />
        </div>
        <svg
          width={303}
          height={1}
          viewBox="0 0 303 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1={303} y1="0.5" y2="0.5" stroke="#E4E4E4" />
        </svg>
        <div>
          <div className="flex flex-cal">
            <input type="checkbox"></input>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium">
              1강 5분 복습하기
            </p>
            <img src="/images/studyLabel/edit.svg" />
            <img src="/images/studyLabel/delete.svg" />
          </div>
          <div className="flex">
            <input type="checkbox"></input>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium">
              1강 5분 복습하기
            </p>
            <img src="/images/studyLabel/edit.svg" />
            <img src="/images/studyLabel/delete.svg" />
          </div>
          <div className="flex">
            <input type="checkbox"></input>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium">
              1강 5분 복습하기
            </p>
            <img src="/images/studyLabel/edit.svg" />
            <img src="/images/studyLabel/delete.svg" />
          </div>
          <div className="border border-gray-300 flex">
            <input type="text" placeholder="오늘 할 일을 입력하세요."></input>
            <img src="/images/studyLabel/Check.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
