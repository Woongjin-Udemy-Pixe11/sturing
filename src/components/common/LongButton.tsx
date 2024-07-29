import { ReactNode } from 'react';

type TButtonProps = {
  color: 'blue' | 'gray' | 'red' | 'white';
  width?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

/*
width 지정 가능
*/
export default function LongButton({
  color,
  width = 'w-full',
  children,
  onClick,
  className,
}: TButtonProps) {
  const colorVariants = {
    blue: 'bg-main-600 text-white',
    gray: 'bg-main-100 text-main-600',
    red: 'text-red border border-red',
    white: 'bg-white text-gray-700 border border-gray-300',
  };

  return (
    <button
      className={`${colorVariants[color]} ${width} py-[1.2rem] px-[1.6rem] rounded-[0.5rem] text-[1.6rem] font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
