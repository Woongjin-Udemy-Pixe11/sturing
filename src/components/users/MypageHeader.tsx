import { GoChevronLeft } from 'react-icons/go';

export default function MyPageHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <header className="flex text-center  border-b-2 border-gray-300">
      <GoChevronLeft size={24} className="mb-4" />
      {children && <h1 className="flex-1">{children}</h1>}
    </header>
  );
}
