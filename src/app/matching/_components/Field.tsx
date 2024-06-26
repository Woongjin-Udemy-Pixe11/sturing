import MatchingContainer from '@/components/(jonghoo)/MatchingContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { level } from '@/constant/region';
import MatchingFooter from '@/components/(jonghoo)/MatchingFooter';
export default function Field() {
  const levelComponet = Object.keys(level).map((key) => {
    return (
      <MatchingContainer key={key}>
        <div className="flex gap-5">
          <p>{key}</p>
          <p>{level[key]}</p>
        </div>
      </MatchingContainer>
    );
  });
  return (
    <div className="w-[37.5rem] px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-black text-headline-3">관심 분야에 대한</h1>
        <h1 className="font-black text-headline-3">
          나의 직업 수준을 선택해 주세요.
        </h1>
      </section>
      <section className="mt-[4rem]">
        <Tabs.Root defaultValue="디자인">
          <Tabs.List className="flex">
            <Tabs.Trigger value="디자인" className="flex-1 minitab-trigger">
              디자인
            </Tabs.Trigger>
            <Tabs.Trigger
              value="기획,마케팅"
              className="flex-1 minitab-trigger"
            >
              기획,마케팅
            </Tabs.Trigger>
          </Tabs.List>
          <div className="py-5">
            <Tabs.Content value="디자인" className="flex flex-col gap-[1.4rem]">
              {levelComponet}
            </Tabs.Content>
            <Tabs.Content
              value="기획,마케팅"
              className="flex flex-col gap-[1.4rem]"
            >
              {levelComponet}
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </section>
    </div>
  );
}
