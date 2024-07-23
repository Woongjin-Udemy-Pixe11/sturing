type TGrayFullLink = {
  onClick?: () => void;
  content: string;
};

export default function GrayFullLink(props: TGrayFullLink) {
  const { onClick, content } = props;
  return (
    <>
      <button
        onClick={onClick}
        className="block w-full border  border-gray-400 text-gray-800 text-[1.6rem] rounded-[.5rem] text-center py-[1.2rem] mt-[2.4rem]"
      >
        {content}
      </button>
    </>
  );
}
