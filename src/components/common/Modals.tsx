export function DefaultModal(props: { message: string }) {
  const { message } = props;

  const buttonStyle = 'h-[3.3rem] px-[1.2rem] rounded-[0.3rem] text-content-1';
  return (
    <>
      <div className="flex flex-col w-[22rem] h-[14.4rem] bg-white justify-center items-center gap-[1.6rem] rounded-[0.5rem] shadow-modal">
        <span className="text-content-2 whitespace-pre-line leading-4 text-center">
          {message}
        </span>
        <div className="flex gap-[0.6rem]">
          <button className={` bg-main-600 text-white ${buttonStyle}`}>
            예
          </button>
          <button
            className={` bg-white border-[0.1rem] border-main-600 text-main-600 ${buttonStyle}`}
          >
            아니오
          </button>
        </div>
      </div>
    </>
  );
}

export function KebabModal() {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-[0.5rem] shadow-modal w-[8.8rem] h-[8rem]">
        <button className="text-content-1 py-[0.8rem] w-full">수정</button>
        <span className="border border-gray-300 w-full"></span>
        <button className="text-content-1 py-[0.8rem] w-full">삭제</button>
      </div>
    </>
  );
}
