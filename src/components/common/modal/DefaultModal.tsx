type TModalProps = {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function DefaultModal(props: TModalProps) {
  const { message, onConfirm, onCancel } = props;

  const buttonStyle = 'h-[3.3rem] px-[1.2rem] rounded-[0.3rem] text-content-1';
  return (
    <>
      <div className="flex flex-col w-[22rem] h-[14.4rem] bg-white justify-center items-center gap-[1.6rem] rounded-[0.5rem] shadow-modal">
        <span className="text-content-2 whitespace-pre-line leading-4 text-center">
          {message}
        </span>
        <div className="flex gap-[0.6rem]">
          <button
            onClick={onConfirm}
            className={` bg-main-600 text-white ${buttonStyle}`}
          >
            예
          </button>
          <button
            onClick={onCancel}
            className={` bg-white border-[0.1rem] border-main-600 text-main-600 ${buttonStyle}`}
          >
            아니오
          </button>
        </div>
      </div>
    </>
  );
}
