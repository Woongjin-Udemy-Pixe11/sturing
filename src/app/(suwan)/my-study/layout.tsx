import Header from '@/components/(suwan)/my-study/Header';
import TabBar from '@/components/(suwan)/Tabar';
import MyStudyInfo from '../../../components/(suwan)/MyStudyInfo';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
