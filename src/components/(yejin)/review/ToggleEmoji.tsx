'use client';

import { useEffect, useState } from 'react';

type ToggleEmojiProps = {
  imgNumber: number;
  isSelected: boolean;
  onSelect: (imgNumber: number) => void;
};

export default function ToggleEmoji(props: ToggleEmojiProps) {
  const { imgNumber, isSelected, onSelect } = props;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(isSelected ? 1 : 0);
  }, [isSelected]);

  const images = [
    `/images/reviewEmoji/review${imgNumber}-inactive.png`,
    `/images/reviewEmoji/review${imgNumber}-active.png`,
  ];

  const handleToggle = () => {
    onSelect(imgNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleToggle} className="w-[calc(100%)]">
        <img
          src={images[imageIndex]}
          alt="Toggled Image"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}
