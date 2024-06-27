export default function FlexContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-wrap gap-[1.5rem] mt-10">{children}</div>;
}
