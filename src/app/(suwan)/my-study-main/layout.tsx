import Header from '@/components/(suwan)/my-study/common/Header';
import Top from '@/components/(suwan)/my-study/top/Top';
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Top />
      <main>{children}</main>
    </>
  );
}
