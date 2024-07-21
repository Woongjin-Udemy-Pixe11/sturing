'use client';
import FilterTab from '@/components/common/Tab/FilterTab';

export default function Region({ state, onClickRegion }: any) {
  const region = state.region;

  const handleRegionSelect = (selectedRegions: string[]) => {
    region.forEach((item: string) => onClickRegion(item));

    selectedRegions.forEach((item: string) => onClickRegion(item));
  };

  return (
    <FilterTab selected={region} onSelect={handleRegionSelect} maxSelect={3} />
  );
}
