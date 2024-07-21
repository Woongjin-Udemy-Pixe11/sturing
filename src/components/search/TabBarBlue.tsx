'use client';
import { useState } from 'react';
import FilterBar from './FilterBar';

type TTabList = {
  name: string;
  component: React.ReactNode;
  isLecture?: boolean;
};

type TTabBarBlueProps = {
  tabList: TTabList[];
  initialFilters: any;
};

export default function TabBarBlue(props: TTabBarBlueProps) {
  const { tabList, initialFilters } = props;
  const [activeTab, setActiveTab] = useState(tabList[0].name);
  const activeTabInfo = tabList.find((tab) => tab.name === activeTab);

  return (
    <>
      {!activeTabInfo?.isLecture && (
        <FilterBar initialFilters={initialFilters} />
      )}
      <hr className="w-full h-[.6rem] bg-gray-200 my-[.8rem] border-0" />
      <ul className="w-full px-[1.6rem] flex justify-center items-center text-center border-b-[.1rem] border-gray-200">
        {tabList.map((tab) => (
          <li
            key={tab.name}
            className={`${
              activeTab === tab.name ? 'font-bold text-blue-600' : ''
            } w-full py-[1.2rem]`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="w-full p-[1.6rem]">
        {tabList.find((tab) => tab.name === activeTab)?.component}
      </div>
    </>
  );
}
