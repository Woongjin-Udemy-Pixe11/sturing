'use client';
import { fetchIcon, postIcon } from '@/utils/my-study-main/fetch';
import { useEffect, useState } from 'react';

const taskIcons = [
  { name: 'heart', emoji: '🩷' },
  { name: 'thumb', emoji: '👍' },
  { name: 'smile', emoji: '😁' },
  { name: 'clap', emoji: '👏' },
  { name: 'sad', emoji: '😂' },
];

const noticeIcons = [
  { name: 'check', emoji: '✔️' },
  { name: 'thumb', emoji: '👍' },
];

type TProps = {
  boardType: 'notice' | 'task';
  blackboardId: string;
  userId: string;
};

export default function EmojiSelectBtn(props: TProps) {
  const { boardType, blackboardId, userId } = props;
  const [iconStates, setIconStates] = useState({});

  useEffect(() => {
    const getIcons = async () => {
      try {
        const icons = await fetchIcon(blackboardId);
        setIconStates(icons);
      } catch (error) {
        console.error('Failed to fetch icons:', error);
      }
    };

    getIcons();
  }, [blackboardId]);

  const onClickIcon = async (iconName: string) => {
    postIcon({ blackboardId, iconName, userId });
    const updatedIcons = await fetchIcon(blackboardId);
    setIconStates(updatedIcons);
  };

  return (
    <div className="flex flex-row items-center gap-x-[0.8rem]">
      {(boardType == 'notice' ? noticeIcons : taskIcons).map(
        ({ name, emoji }) => (
          <div
            key={name}
            className="w-[3.8rem] h-[2.2rem] rounded-[8rem] bg-main-100 border-[0.1rem] border-main-600"
          >
            <div className="flex flex-row items-center justify-center gap-x-[0.4rem] text-content-2">
              <button onClick={() => onClickIcon(name)}>
                {emoji}
                {/* <span>{iconStates?.users.length || 0}</span> */}
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
