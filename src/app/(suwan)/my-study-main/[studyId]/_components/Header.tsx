'use server';
import SubHeader from '@/components/common/SubHeader';
import TabBar from '@/components/(suwan)/my-study/head/Tabar';
import StudyInfo from '@/components/(suwan)/my-study/head/StudyInfo';

export default async function Header({ studyId, data }: any) {
  return (
    <>
      <div className="absolute w-full h-[100%] backdrop-brightness-50  -z-10 "></div>
      <img
        className="absolute inset-0 w-full h-[40rem] object-cover -z-20 backdrop-brightness-50"
        src={data.studyImage}
      />

      <SubHeader isWhite={true} />
      <StudyInfo data={data} />
      <TabBar studyId={studyId} />
    </>
  );
}
