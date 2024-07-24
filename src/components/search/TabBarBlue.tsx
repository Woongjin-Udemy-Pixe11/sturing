'use client';
import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';

type TTabList = {
  name: string;
  component: React.ReactNode;
  isLecture?: boolean;
};

type TTabBarBlueProps = {
  tabList: TTabList[];
  initialFilters: any;
  activeTab: string;
  onTabChange?: (tabName: string) => void;
};

export default function TabBarBlue(props: TTabBarBlueProps) {
  const { tabList, initialFilters, activeTab, onTabChange } = props;
  const [currentTab, setCurrentTab] = useState(activeTab);
  const activeTabInfo = tabList.find((tab) => tab.name === currentTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

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
              currentTab === tab.name ? 'font-bold text-blue-600' : ''
            } w-full py-[1.2rem]`}
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="w-full p-[1.6rem]">
        {tabList.find((tab) => tab.name === currentTab)?.component}
      </div>
    </>
  );
}
