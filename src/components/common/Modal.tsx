export default function Modal(props: { message: string }) {
  const { message } = props;

  const buttonStyle = 'h-[3.3rem] px-[1.2rem] rounded-[0.3rem] text-content-1';
  return (
    <>
      <div className="flex flex-col w-[22rem] h-[14.4rem] bg-white justify-center items-center gap-[1.4rem] rounded-[0.5rem] shadow-modal">
        <span className="text-content-2 ">{message}</span>
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
