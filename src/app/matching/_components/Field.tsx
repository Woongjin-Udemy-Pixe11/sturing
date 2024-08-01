import MatchingContainer from '@/components/matching/MatchingContainer';
import { level } from '@/constant/region';
import * as Tabs from '@radix-ui/react-tabs';

type Tfieldprops = {
  interest: string[];
  onClickLevel: (field: string, level: string, interest: string[]) => void;
  Level: {
    [key: string]: string;
  };
};

export default function Field(props: Tfieldprops) {
  const { interest, onClickLevel, Level } = props;
  return (
    <div className="w-full px-[1.4rem]">
      <section className="py-[2rem] ">
        <h1 className="font-medium text-[2rem]">관심 분야에 대한</h1>
        <h1 className="font-medium text-[2rem]">
          나의 직업 수준을 선택해 주세요.
        </h1>
      </section>
      <section className="mt-[2rem] w-full">
        <Tabs.Root defaultValue={`${interest[0]}`}>
          <Tabs.List className="flex">
            {interest.map((field: string) => {
              return (
                <Tabs.Trigger
                  value={`${field}`}
                  className="flex-1 minitab-trigger p-[1.2rem]"
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
                  <div className="m-auto flex flex-col ">
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
