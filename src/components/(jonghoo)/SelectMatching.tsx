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
      className={`w-[16.4rem] ${size} border border-gray-300 flex items-center justify-center rounded-lg`}
    >
      {children}
    </div>
  );
}
