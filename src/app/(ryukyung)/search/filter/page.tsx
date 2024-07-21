import BottomSheetFilter from '@/components/search/BottomSheetFilter';

async function getFilterCounts() {
  const res = await fetch(`${process.env.LOCAL_URL}/api/search/filter`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch filter counts');
  }

  return res.json();
}

export default async function page() {
  const filterCounts = await getFilterCounts();
  console.log('Server-side filterCounts:', filterCounts);

  return (
    <>
      <BottomSheetFilter filterCounts={filterCounts} />
    </>
  );
}
