'use client';
import FilterTab from '@/components/common/Tab/FilterTab';
import { useFilterStore } from '@/store/filterStore';

export default function Region() {
  const { region, setRegion } = useFilterStore();

  const handleRegionSelect = (selectedRegions: string[]) => {
    region.forEach((item) => setRegion(item));
    selectedRegions.forEach((item) => setRegion(item));
  };

  return (
    <FilterTab selected={region} onSelect={handleRegionSelect} maxSelect={3} />
  );
}
