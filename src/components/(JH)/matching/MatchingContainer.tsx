export default function MatchingContainer({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  {
    return (
      <div
        className="w-full h-[6.4rem] rounded-[0.5rem] border-[0.1rem] border-gray-500 py-[2rem] px-[2.4rem] text-content-1"
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
