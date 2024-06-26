export default function MatchingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <div className="w-[34.4rem] h-[6.4rem] rounded-[0.5rem] border-[0.1rem] border-gray-500 py-[2rem] px-[2.4rem] text-content-1">
        {children}
      </div>
    );
  }
}
