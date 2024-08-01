export default function MatchingContainer({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  let bg = active && 'bg-main-100 text-main-700 border border-main-600';
  return (
    <div
      className={`w-full h-[6.4rem] rounded-[0.5rem] border border-gray-400 py-[2rem] px-[2.4rem] my-[.7rem] text-content-1 text-gray-700 ${bg}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
