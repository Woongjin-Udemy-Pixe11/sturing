'use client';
import { area } from '@/constant/region';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Tabs from '@radix-ui/react-tabs';
import { IoSearch } from 'react-icons/io5';
import TabLabel from './TabLabel';
import { IoMdCheckmark } from 'react-icons/io';

type TFilterTabProps = {
  selected: string[];
  onSelect: (selected: string[]) => void;
  maxSelect: number;
};

export default function FilterTab({
  selected,
  onSelect,
  maxSelect,
}: TFilterTabProps) {
  const toggleItem = (item: string) => {
    const newSelected = selected.includes(item)
      ? selected.filter((i) => i !== item)
      : [...selected, item].slice(-maxSelect);

    onSelect(newSelected);
  };

  return (
    <div className="flex flex-col gap-3 w-full, overflow-y-hidden">
      <>
        <label
          htmlFor="search-input"
          className="block w-[calc(100% - 3.2rem)] mb-[1.2rem] bg-main-100 flex justify-between px-[2rem] rounded-[2.5rem]"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="스터디 선호지역을 입력해 주세요"
            className="w-[27rem] inline-block bg-inherit py-[1.3rem] pr-[2rem] text-content-1 placeholder-gray-700"
          />
          <button>
            <IoSearch className="w-[2.4rem] h-[2.4rem] text-main-600" />
          </button>
        </label>
      </>

      <Tabs.Root defaultValue="서울" className="flex w-full  ">
        <Tabs.List className="flex flex-col  w-[33.33%] text-[1.4rem] text-[#909090]">
          <ScrollArea.Root className=" h-[40vh] bg-white">
            <ScrollArea.Viewport className="w-full h-full ">
              {Object.keys(area).map((key, index) => {
                return (
                  <Tabs.Trigger
                    value={`${key}`}
                    key={index}
                    className={` w-full md:max-w-[13.3rem] h-[4.9rem] py-[1.4rem] px-[2rem] tab-trigger`}
                  >
                    {key}
                  </Tabs.Trigger>
                );
              })}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="bg-red " orientation="vertical">
              <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Tabs.List>
        <Tabs.List className="w-[63%] border-t-[0.1rem] border-[#E4E4E4]">
          {Object.keys(area).map((key: string, index) => {
            return (
              <Tabs.Content value={`${key}`} key={index}>
                <ScrollArea.Root className=" h-[40vh]  overflow-hidden  ">
                  <ScrollArea.Viewport className="w-full h-full overflow-auto ">
                    {area[key].map((item: any, index) => {
                      let newid: string = item;

                      const bg = selected.includes(newid)
                        ? 'bg-[#ECF1FF] text-main-600'
                        : 'bg-white';
                      return (
                        <Tabs.Content
                          value={`${key}`}
                          key={index}
                          className={`${bg}  w-full h-[4.9rem] py-[1.4rem] ps-[2rem] border-b-[0.1rem] border-[#E4E4E4] text-content-1 text-gray-700 relative`}
                          onClick={() => toggleItem(item)}
                        >
                          <div className="flex">
                            <p className="w-[90%]">{item}</p>
                            {selected.includes(newid) && (
                              <IoMdCheckmark className="text-main-600 text-[2rem] right-[1.4rem] absolute" />
                            )}
                          </div>
                        </Tabs.Content>
                      );
                    })}
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar
                    forceMount={true}
                    className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-160 ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
                    orientation="vertical"
                  >
                    <ScrollArea.Thumb className="flex-1 h-[90%] bg-[#D0D0D0] rounded-[4px]  " />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </Tabs.Content>
            );
          })}
        </Tabs.List>
      </Tabs.Root>
      <div className="flex gap-4 p-4 flex-wrap">
        {selected.map((item, index) => {
          return (
            <TabLabel key={index} onUnSelectContent={() => toggleItem(item)}>
              {item}
            </TabLabel>
          );
        })}
      </div>
    </div>
  );
}
