import Header from '@/components/(suwan)/my-study/common/Header';
import TabBar from '@/components/(suwan)/my-study/head/Tabar';
import StudyInfo from '@/components/(suwan)/my-study/head/StudyInfo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <StudyInfo />
      <TabBar />
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/images/study-img1.png"
      />
      <main className="bg-gray-100">{children}</main>
    </>
  );
}
