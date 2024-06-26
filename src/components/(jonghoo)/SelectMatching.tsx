type TSelecMatchingProps = {
  children: React.ReactNode;
  type: 'interest' | 'mood';
};

export default function SelectMatching({
  children,
  type = 'interest',
}: TSelecMatchingProps) {
  let size = type === 'interest' ? ' h-[9rem]' : 'h-[7rem]';
  return (
    <div
      className={`min-w-[16.4rem] max-w-[27rem] w-5/12 ${size} border border-gray-300 flex items-center justify-center rounded-lg gap-2`}
    >
      {children}
    </div>
  );
}
