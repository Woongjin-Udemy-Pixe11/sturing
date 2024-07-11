'use client';
import { useState } from 'react';

export default function EmojiSelectBtn() {
  let [heart, setHeart] = useState(false);
  let [thumb, setThumb] = useState(false);
  let [smile, setSmile] = useState(false);
  let [clap, setClap] = useState(false);
  let [sad, setSad] = useState(false);

  let [heartCount, setHeartCount] = useState(0);
  let [thumbCount, setThumbCount] = useState(0);
  let [smileCount, setSmileCount] = useState(0);
  let [clapCount, setClapCount] = useState(0);
  let [sadCount, setSadCount] = useState(0);

  const onHeartClick = () => {
    if (heart) {
      setHeart(false);
      setHeartCount((prev) => prev - 1);
    } else {
      setHeart(true);
      setHeartCount((prev) => prev + 1);
    }
  };

  const onThumbClick = () => {
    if (thumb) {
      setThumb(false);
      setThumbCount((prev) => prev - 1);
    } else {
      setThumb(true);
      setThumbCount((prev) => prev + 1);
    }
  };

  const onSmileClick = () => {
    if (smile) {
      setSmile(false);
      setSmileCount((prev) => prev - 1);
    } else {
      setSmile(true);
      setSmileCount((prev) => prev + 1);
    }
  };

  const onClapClick = () => {
    if (clap) {
      setClap(false);
      setClapCount((prev) => prev - 1);
    } else {
      setClap(true);
      setClapCount((prev) => prev + 1);
    }
  };

  const onSadClick = () => {
    if (sad) {
      setSad(false);
      setSadCount((prev) => prev - 1);
    } else {
      setSad(true);
      setSadCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-row items-center gap-x-[0.8rem]">
      <div className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-main-100 border-[0.1rem] border-main-600">
        <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
          <button onClick={onHeartClick}>
            ❤️ <span>{heartCount}</span>
          </button>
        </div>
      </div>
      <div className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-main-100 border-[0.1rem] border-main-600">
        <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
          <button onClick={onThumbClick}>
            👍 <span>{thumbCount}</span>
          </button>
        </div>
      </div>
      <div className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-main-100 border-[0.1rem] border-main-600">
        <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
          <button onClick={onSmileClick}>
            😁 <span>{smileCount}</span>
          </button>
        </div>
      </div>
      <div className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-main-100 border-[0.1rem] border-main-600">
        <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
          <button onClick={onClapClick}>
            👏 <span>{clapCount}</span>
          </button>
        </div>
      </div>
      <div className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-gray-100 border-[0.1rem] border-gray-300">
        <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
          <button onClick={onSadClick}>
            😂 <span>{sadCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
