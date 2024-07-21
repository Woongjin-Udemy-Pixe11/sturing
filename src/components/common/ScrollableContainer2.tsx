type TScrollableContainer = {
  children: React.ReactNode;
};

export default function ScrollableContainer(props: TScrollableContainer) {
  const { children } = props;
  return (
    <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1.6rem]  px-[1.6rem] mb-[4rem]">
      {children}
    </ul>
  );
}
