export default function FlexContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:m-auto flex flex-wrap gap-[1.5rem] pt-10 justify-center xl:p-10 xl:gap-3 xl:flex-wrap xl:justify-normal ">
      {children}
    </div>
  );
}
