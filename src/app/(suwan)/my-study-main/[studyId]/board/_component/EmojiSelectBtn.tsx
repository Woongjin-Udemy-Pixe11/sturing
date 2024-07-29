'use client';
import { fetchIcon, postIcon } from '@/lib/actions/studyMainAction';
import { useEffect, useState } from 'react';

const taskIcons = [
  { name: 'heart', emoji: '🩷' },
  { name: 'good', emoji: '👍' },
  { name: 'smile', emoji: '😁' },
  { name: 'clap', emoji: '👏' },
  { name: 'sad', emoji: '😂' },
];

const noticeIcons = [{ name: 'check', emoji: '✔️' }];

type TProps = {
  boardType: 'notice' | 'task';
  blackboardId: string;
  userId: string;
  icons: IconState[];
};

type IconState = {
  _id: string;
  blackboardId: string;
  iconName: string;
  users: string[];
};

export default function EmojiSelectBtn(props: TProps) {
  const { boardType, blackboardId, userId, icons } = props;
  const [iconStates, setIconStates] = useState<IconState[]>(icons);

  const onClickIcon = async (iconName: string) => {
    await postIcon({ blackboardId, iconName, userId });

    setIconStates((prev) => {
      if (prev.length == 0) {
        // 새로운 아이콘을 생성하는 경우
        const newIcon: IconState = {
          _id: 'temp',
          blackboardId,
          iconName,
          users: [userId],
        };
        return [...prev, newIcon];
      } else {
        // 기존 아이콘이 있는 경우
        return prev.map((icon) => {
          if (icon.iconName === iconName) {
            const newUsers = icon.users.includes(userId)
              ? icon.users.filter((id) => id !== userId)
              : [...icon.users, userId];

            return { ...icon, users: newUsers };
          }
          return icon;
        });
      }
    });
  };

  const getIconUserCount = (name: string) => {
    if (iconStates) {
      const iconData = iconStates.find((icon) => icon.iconName === name);
      return iconData ? iconData.users.length : 0;
    }
    return 0;
  };

  const isIconSelected = (name: string) => {
    if (iconStates) {
      const iconData = iconStates.find((icon) => icon.iconName === name);
      return iconData ? iconData.users.includes(userId) : false;
    }
    return false;
  };

  // console.log(iconStates);

  return (
    <div className="flex flex-row items-center gap-x-[0.8rem]">
      {(boardType == 'notice' ? noticeIcons : taskIcons).map(
        ({ name, emoji }) => (
          <div
            key={name}
            className={`flex items-center justify-center w-[3.8rem] h-[2.2rem] rounded-[8rem] border-[0.1rem] ${
              isIconSelected(name)
                ? 'bg-main-100 border-main-600'
                : 'border-gray-300'
            }`}
          >
            <div className="flex flex-row items-center justify-center text-content-2">
              <button onClick={() => onClickIcon(name)}>
                {emoji}
                <span className="pl-[.2rem]">{getIconUserCount(name)}</span>
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
