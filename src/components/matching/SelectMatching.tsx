type TSelecMatchingProps = {
  children: React.ReactNode;
  type: 'interest' | 'mood';
  onClick?: () => void;
  active?: boolean;
};

export default function SelectMatching({
  children,
  type = 'interest',
  onClick,
  active,
}: TSelecMatchingProps) {
  let size = type === 'interest' ? ' h-[9rem]' : 'h-[7rem]';
  let bg = active && 'bg-main-100 text-main-700 border border-main-500';
  return (
    <div
      className={`min-w-[16.4rem] max-w-[27rem] w-5/12 ${size} border border-gray-300 flex items-center justify-center rounded-[.8rem] gap-2 ${bg}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
