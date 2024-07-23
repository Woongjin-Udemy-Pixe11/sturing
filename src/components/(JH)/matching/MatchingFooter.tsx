import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import CircleButton from './CircleButton';
export default function MatchingFooter({
  step,
  Forward,
  Backward,
  active,
  serverAction,
}: {
  step: number;
  Forward: () => void;
  Backward: () => void;
  active?: boolean;
  serverAction?: any;
}) {
  return (
    <footer className="flex justify-between w-full  px-[1.6rem] pb-[1.6rem] absolute bottom-[-10rem]  ">
      {step === 1 ? (
        <div></div>
      ) : (
        <CircleButton>
          <GoChevronLeft size={35} color={'white'} onClick={Backward} />
        </CircleButton>
      )}

      {step === 5 ? (
        <button
          onClick={serverAction}
          className="flex items-center justify-center w-[5.6rem] h-[5.6rem] bg-gray-400 rounded-full "
        >
          <GoChevronRight size={35} color={'white'} />
        </button>
      ) : (
        <CircleButton onClick={Forward}>
          {' '}
          <GoChevronRight size={35} color={'white'} />{' '}
        </CircleButton>
      )}
    </footer>
  );
}
