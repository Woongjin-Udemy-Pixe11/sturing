'use client';

import { useFilterStore } from '@/store/filterStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
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
  keyword?: string;
};

export default function TabContainer({
  tabList,
  initialFilters,
  activeTab = '전체',
  keyword,
}: TTabListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { reset } = useFilterStore();

  useEffect(() => {
    if (keyword) {
      reset();
    }
  }, [keyword, reset]);

  const handleTabChange = (tabName: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('tab', tabName);
    router.push(`/search/result?${currentParams.toString()}`);
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
