import { FaStar } from 'react-icons/fa';

type TLabelProps = {
  isBlue?: boolean;
  isStar?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Label(props: TLabelProps) {
  const { isBlue, isStar, children, onClick } = props;
  const classList = `${
    isBlue ? 'bg-main-600 text-white' : 'bg-main-100 text-main-600'
  } border border-main-600 px-[0.6rem] py-[0.2rem] text-content-2 rounded inline-flex items-center`;

  return (
    <span className={classList} onClick={onClick}>
      {isStar && <FaStar className="mr-[.4rem]" />}
      {children}
    </span>
  );
}
