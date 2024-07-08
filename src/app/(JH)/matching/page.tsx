import { GoChevronLeft } from 'react-icons/go';
import ClientMatching from './_components/ClientMatching';
import { getSession } from '@/utils/getSessions';

export default async function page() {
  const session = await getSession();
  const id = session?.user?.id;
  console.log(session);

  const data = await (
    await fetch(`http://localhost:3000/api/matching?id=${id}`)
  ).json();

  let exist = true;
  if (data.interests.length === 0) exist = false;
  return <ClientMatching data={data} session={session} exist={exist} />;
}
