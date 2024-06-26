import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import CircleButton from './CircleButton';
export default function MatchingFooter({
  step,
  Forward,
  Backward,
}: {
  step: number;
  Forward: () => void;
  Backward: () => void;
}) {
  return (
    <footer className="flex justify-between w-[36.5rem]   px-[1.6rem] absolute bottom-0">
      {step === 1 ? (
        <div></div>
      ) : (
        <CircleButton>
          <GoChevronLeft size={35} color={'white'} onClick={Backward} />
        </CircleButton>
      )}

      <CircleButton>
        <GoChevronRight size={35} color={'white'} onClick={Forward} />
      </CircleButton>
    </footer>
  );
}
