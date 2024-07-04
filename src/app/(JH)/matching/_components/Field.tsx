import MatchingContainer from '@/components/(JH)/matching/MatchingContainer';
import * as Tabs from '@radix-ui/react-tabs';
import { level } from '@/constant/region';

//TODO:console.log(4번씩찍히는데 이거 최적화해서 memo, useCallback 해야될듯)

export default function Field({ interest, onClickLevel, Level }: any) {
  console.log(interest, Level);
  return (
    <div className="w-full px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-black text-headline-3">관심 분야에 대한</h1>
        <h1 className="font-black text-headline-3">
          나의 직업 수준을 선택해 주세요.
        </h1>
      </section>
      <section className="mt-[4rem] w-full">
        <Tabs.Root defaultValue={`${interest[0]}`}>
          <Tabs.List className="flex">
            {interest.map((field: string) => {
              return (
                <Tabs.Trigger
                  value={`${field}`}
                  className="flex-1 minitab-trigger"
                  key={field}
                >
                  {field}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <div className="py-5 ">
            {interest.map((field: string) => {
              return (
                <Tabs.Content value={`${field}`} key={field}>
                  <div className="m-auto flex flex-col gap-3">
                    {Object.keys(level).map((key) => {
                      return (
                        <MatchingContainer
                          key={key}
                          active={Level[field] === key ? true : false}
                        >
                          <div
                            className="flex gap-5"
                            onClick={() => {
                              onClickLevel(field, key, interest);
                            }}
                          >
                            <p>{key}</p>
                            <p>{level[key]}</p>
                          </div>
                        </MatchingContainer>
                      );
                    })}
                  </div>
                </Tabs.Content>
              );
            })}
          </div>
        </Tabs.Root>
      </section>
    </div>
  );
}
