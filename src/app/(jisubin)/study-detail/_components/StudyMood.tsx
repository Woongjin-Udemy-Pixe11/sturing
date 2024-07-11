import { emojiLabelList } from '@/constant/emojiLabelList';
import Image from 'next/image';

type TStudyMoodProps = {
  mood: string[];
};

export default function StudyMood(props: TStudyMoodProps) {
  const { mood } = props;
  const moodArray = mood.map((v) =>
    emojiLabelList.filter((emoji) => emoji.title == v),
  );
  return (
    <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
      <div className="flex flex-col justify-center">
        <h2 className="mx-[2rem] mt-[2.4rem] pb-[1.2rem] font-semibold text-gray-950">
          해당 스터디의 분위기
        </h2>
        <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
        <div className="flex flex-row mx-[2rem] gap-x-[0.4rem]">
          {moodArray.map(([v]) => (
            <div className="flex flex-row items-center py-[0.55rem] px-[0.8rem] rounded-[0.3rem] border-main-600 border-[0.1rem] gap-x-[0.3rem]">
              <Image
                src={v.imgSrc}
                width={16}
                height={17}
                alt="Picture of the Emoji"
              />
              <span className="text-content-1 text-main-600">{v.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
