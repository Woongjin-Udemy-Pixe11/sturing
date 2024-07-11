import { getSession } from '@/utils/getSessions';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const userid = session?.user?.id;

  return (
    <>
      <main>{children}</main>
    </>
  );
}
