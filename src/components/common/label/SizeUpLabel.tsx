type TSizeUpLabelPros = {
  isClicked?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function SizeUpLabel(props: TSizeUpLabelPros) {
  const { isClicked, children, onClick } = props;

  return (
    <>
      <div
        className={`
        flex justify-center whitespace-nowrap items-center border text-gray-600 border-gray-300 px-[1.2rem] py-[0.4rem] text-content-1 rounded
        ${
          isClicked &&
          'text-main-600 bg-main-100 border-main-600 border-[.1rem]'
        }`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
