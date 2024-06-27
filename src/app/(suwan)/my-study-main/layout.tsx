import Header from '@/components/(suwan)/my-study/common/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
