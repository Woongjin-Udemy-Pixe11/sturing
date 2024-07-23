'use client';

import { useRouter } from 'next/navigation';
import TabBarBlue from './TabBarBlue';

type TTabList = {
  name: string;
  component: React.ReactNode;
  isLecture?: boolean;
};

type TTabListProps = {
  tabList: TTabList[];
  initialFilters: {
    field?: string[];
    region?: string[];
    people?: string[];
    period?: string;
    level?: string[];
  };
  activeTab?: string;
};

export default function TabContainer({
  tabList,
  initialFilters,
  activeTab = '전체',
}: TTabListProps) {
  const router = useRouter();

  const handleTabChange = (tabName: string) => {
    router.push(`?tab=${tabName}`);
  };

  return (
    <TabBarBlue
      tabList={tabList}
      initialFilters={initialFilters}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );
}
