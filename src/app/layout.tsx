import Header from '@/components/common/Header';
import './globals.css';
import { getSession } from '@/utils/getSessions';

export const metadata = {
  title: 'Sturing',
  description: '사람과 스터디, 강의가 한 고리로',
  icons: {
    icon: '/sturing-circle-logo.png',
  },
};

async function fetchUser(id: string) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/users/?id=${id}`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  let id = session?.user?.id;
  const user = await fetchUser(id);

  return (
    <html lang="ko">
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
