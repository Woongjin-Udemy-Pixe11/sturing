export default function CircleButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-[5.6rem] h-[5.6rem] bg-gray-400 rounded-full ">
      {children}
    </div>
  );
}
