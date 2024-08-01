type TScrollableContainer = {
  children: React.ReactNode;
};

export default function ScrollableContainer(props: TScrollableContainer) {
  const { children } = props;
  return (
    <ul className="w-full overflow-y-auto scrollbar-hide flex gap-[.8rem]">
      {children}
    </ul>
  );
}
