import { ReactNode } from 'react';

type TTStatusProps = {
  color: 'blue' | 'gray' | 'red';
  subColor: 'blue' | 'gray' | 'red';
  children: ReactNode;
};

export default function StudyStatus({
  color,
  subColor,
  children,
}: TTStatusProps) {
  const colorVariants = {
    blue: 'bg-main-100 text-main-600',
    gray: 'bg-gray-300 text-gray-800',
    red: 'bg-[rgba(255,65,65,0.1)] text-red',
  };
  const subColorVariants = {
    blue: 'bg-main-600',
    gray: 'bg-gray-800',
    red: 'bg-red',
  };

  return (
    <div className="flex">
      <span
        className={`${colorVariants[color]} flex items-center gap-[0.4rem] py-[0.2rem] px-[0.6rem] rounded-[0.3rem] text-[1.2rem] font-medium`}
      >
        <span
          className={`${subColorVariants[subColor]} flex w-[0.5rem] h-[0.5rem] rounded-full`}
        ></span>
        {children}
      </span>
    </div>
  );
}
