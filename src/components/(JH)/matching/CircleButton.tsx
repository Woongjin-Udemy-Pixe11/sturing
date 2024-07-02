export default function CircleButton({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: any;
}) {
  return (
    <button
      className="flex items-center justify-center w-[5.6rem] h-[5.6rem] bg-gray-400 rounded-full "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
