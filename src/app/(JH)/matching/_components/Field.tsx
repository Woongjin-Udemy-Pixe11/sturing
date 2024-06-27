import MatchingContainer from '@/components/(JH)/matching/MatchingContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { level } from '@/constant/region';
import MatchingFooter from '@/components/(JH)/matching/MatchingFooter';
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
    <div className="w-full px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-black text-headline-3">관심 분야에 대한</h1>
        <h1 className="font-black text-headline-3">
          나의 직업 수준을 선택해 주세요.
        </h1>
      </section>
      <section className="mt-[4rem] w-full">
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
          <div className="py-5 ">
            {/* //TODO: flex 일떄는 중앙정렬되는데, 해제하면 중앙이안됨 why? */}
            <Tabs.Content value="디자인">
              <div className="m-auto flex flex-col gap-3">{levelComponet}</div>
            </Tabs.Content>
            <Tabs.Content value="기획,마케팅">
              <div className="m-auto flex flex-col gap-3">{levelComponet}</div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </section>
    </div>
  );
}
