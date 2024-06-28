type TSizeUpLabelPros = {
  isClicked?: boolean;
  children: string;
};

export default function SizeUpLabel(props: TSizeUpLabelPros) {
  const { isClicked, children } = props;

  return (
    <>
      <div
        className={`${
          isClicked
            ? 'text-main-600 bg-main-100 border-main-600 border-[.1rem]'
            : ''
        }flex justify-start items-start border text-gray-600 border-gray-300 px-[1.2rem] py-[0.4rem] text-content-1 rounded`}
      >
        {children}
      </div>
    </>
  );
}
