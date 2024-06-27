import Header from '@/components/(suwan)/my-study/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
