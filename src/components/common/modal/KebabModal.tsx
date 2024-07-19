type TKebabModal = {
  onClickEddit?: () => void;
  onClickDelete?: () => void;
};

export default function KebabModal(props: TKebabModal) {
  const { onClickEddit, onClickDelete } = props;
  return (
    <>
      <div
        className="absolute right-5
      flex flex-col justify-center bg-white items-center rounded-[0.5rem] shadow-modal w-[8.8rem] h-[8rem]"
      >
        <button
          onClick={onClickEddit}
          className="text-content-1 py-[0.8rem] w-full"
        >
          수정
        </button>
        <span className="border border-gray-300 w-full"></span>
        <button
          onClick={onClickDelete}
          className="text-content-1 py-[0.8rem] w-full"
        >
          삭제
        </button>
      </div>
    </>
  );
}
