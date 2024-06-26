import * as Tabs from '@radix-ui/react-tabs';
import MyPageHeader from '../_componets/MypageHeader';

export default function MyBookMarkList() {
  return (
    <main>
      <MyPageHeader>내 관심 목록</MyPageHeader>
      <Tabs.Root defaultValue="스터디" className="mt-[2rem]">
        <Tabs.List className="flex">
          <Tabs.Trigger value="스터디" className="flex-1 minitab-trigger">
            스터디
          </Tabs.Trigger>
          <Tabs.Trigger value="강의" className="flex-1 minitab-trigger">
            강의
          </Tabs.Trigger>
        </Tabs.List>
        <div className="py-5">
          <Tabs.Content value="스터디" className="flex flex-col gap-[1.4rem]">
            스터디 컨텐츠
          </Tabs.Content>
          <Tabs.Content value="강의" className="flex flex-col gap-[1.4rem]">
            {' '}
            강의 컨텐츠
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </main>
  );
}
