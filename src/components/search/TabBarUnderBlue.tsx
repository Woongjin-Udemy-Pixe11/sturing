'use client';
import { useState } from 'react';

type TTabList = {
  name: string;
  component: React.ReactNode;
};

type TTabBarBlueProps = {
  tabList: TTabList[];
};
export default function TabBarUnderBlue(props: TTabBarBlueProps) {
  const { tabList } = props;
  const [activeTab, setActiveTab] = useState(tabList[0].name);

  return (
    <div className="flex flex-col h-full">
      <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-[.1rem] text-gray-700 border-gray-200">
        {tabList.map((tab) => (
          <li
            key={tab.name}
            className={`${
              activeTab === tab.name
                ? 'font-bold text-blue-600  border-b-main-600 border-b-2'
                : ''
            } w-full py-[1.2rem]`}
            onClick={() => setActiveTab(tab.name)}
          >
            <button>{tab.name}</button>
          </li>
        ))}
      </ul>
      <div className="w-full flex-1 overflow-auto px-[1.8rem] py-[2.4rem]">
        {tabList.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
}
