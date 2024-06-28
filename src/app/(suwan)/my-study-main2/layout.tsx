import Header from '@/components/(suwan)/my-study/common/Header';
import TabBar from '@/components/(suwan)/my-study/head/Tabar';
import StudyInfo from '@/components/(suwan)/my-study/head/StudyInfo';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StudyInfo />
      <TabBar />
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/images/study-img1.png"
      />
      <main>{children}</main>
    </>
  );
}
