import { getSession } from '@/utils/getSessions';
import ClientMatching from './_components/ClientMatching';

export default async function page() {
  const session = await getSession();
  const id = session?.user?.id;

  const data = await (
    await fetch(`${process.env.LOCAL_URL}/api/matching?id=${id}`, {
      cache: 'no-store',
    })
  ).json();

  let exist = true;
  if (data.interests.length === 0) exist = false;
  return <ClientMatching data={data} session={session} exist={exist} />;
}
