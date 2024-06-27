type TScrollableContainer = {
  children: React.ReactNode;
};

export default function ScrollableContainer(props: TScrollableContainer) {
  const { children } = props;
  return (
    <ul className="w-full overflow-y-auto flex gap-[1.6rem]  px-[1.6rem] mb-[4rem]">
      {children}
    </ul>
  );
}
