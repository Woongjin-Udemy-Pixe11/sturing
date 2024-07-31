export default function CircleButton({
  children,
  onClick,
  activecolor,
}: {
  children?: React.ReactNode;
  onClick?: any;
  activecolor: string;
}) {
  return (
    <button
      className={`flex items-center justify-center w-[5.6rem] h-[5.6rem] ${activecolor} rounded-full `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
