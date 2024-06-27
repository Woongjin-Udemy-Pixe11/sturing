export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-[1.6rem] py-[2rem]">{children}</div>;
}
