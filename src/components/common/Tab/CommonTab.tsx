'use client';
import { area } from '@/constant/region';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Tabs from '@radix-ui/react-tabs';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import TabLabel from './TabLabel';

export default function CommonTab({ regions, onClickRegion }: any) {
  const [keyword, setKeyword] = useState('');
  const [currentTab, setCurrentTab] = useState('서울');

  // Create a mapping of all regions to their parent keys
  const regionMapping: { [key: string]: string } = {};
  Object.keys(area).forEach((key) => {
    area[key].forEach((region) => {
      regionMapping[region] = key;
    });
  });

  // Update the current tab based on the keyword
  useEffect(() => {
    if (keyword) {
      for (const region in regionMapping) {
        if (region.toLowerCase().includes(keyword.toLowerCase())) {
          setCurrentTab(regionMapping[region]);
          break;
        }
      }
    }
  }, [keyword]);

  // Function to check if a region matches the keyword
  const matchesKeyword = (region: string) => {
    return region.toLowerCase().includes(keyword.toLowerCase());
  };

  return (
    <div className="flex flex-col gap-3 w-full, overflow-y-hidden">
      <>
        <label
          htmlFor="search-input"
          className="block w-[calc(100% - 3.2rem)] mx-[1.6rem] my-[1.6rem] bg-main-100 flex justify-between px-[2rem] rounded-[2.5rem]"
        >
          <input
            type="text"
            name="search-input"
            id="search-input"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="스터디 선호지역을 입력해 주세요"
            className="w-[27rem] inline-block bg-inherit py-[1.3rem] pr-[2rem] text-content-1 placeholder-gray-700"
          />
          <button>
            <IoSearch className="w-[2.4rem] h-[2.4rem] text-main-600" />
          </button>
        </label>
      </>

      <Tabs.Root
        value={currentTab}
        onValueChange={setCurrentTab}
        className="flex w-full border-t border-gray-300"
      >
        <Tabs.List className="flex flex-col w-[38%] text-[1.4rem] text-[#909090]">
          <ScrollArea.Root className=" h-[33.3rem] bg-white pl-[1.6rem]">
            <ScrollArea.Viewport className="w-full h-full">
              {Object.keys(area).map((key, index) => {
                return (
                  <Tabs.Trigger
                    value={key}
                    key={index}
                    className={` w-full md:max-w-[13.3rem] py-[1.5rem] px-[1rem] text-content-1 tab-trigger`}
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
        <Tabs.List className="w-[58%]">
          {Object.keys(area).map((key: string, index) => {
            return (
              <Tabs.Content value={key} key={index}>
                <ScrollArea.Root className=" h-[33.3rem] overflow-hidden">
                  <ScrollArea.Viewport className="w-full h-full overflow-auto ">
                    {area[key].map((item: any, index) => {
                      let newid: string = item;

                      const isMatch = matchesKeyword(item);
                      const bg = regions.includes(newid)
                        ? 'bg-[#ECF1FF] text-[#4171FF]'
                        : 'bg-white';
                      const hidden = keyword && !isMatch ? 'hidden' : '';

                      return (
                        <Tabs.Content
                          value={`${key}`}
                          key={index}
                          className={`${bg} ${hidden} w-full py-[1.5rem] ps-[2rem] border-b-[0.1rem] text-content-1 text-gray-700 border-[#E4E4E4]`}
                          onClick={() => {
                            onClickRegion(item);
                            setKeyword('');
                          }}
                        >
                          <p className="w-[90%]">{item}</p>
                        </Tabs.Content>
                      );
                    })}
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar
                    forceMount={true}
                    className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-160 ease-out hover:bg-gray-200 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
                    orientation="vertical"
                  >
                    <ScrollArea.Thumb className="flex-1 h-[90%] bg-[#D0D0D0] rounded-[4px]" />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </Tabs.Content>
            );
          })}
        </Tabs.List>
      </Tabs.Root>
      <div className="flex gap-4 p-4 flex-wrap lg:m-auto">
        {regions.map((item: any, index: number) => {
          return (
            <TabLabel
              key={index}
              onUnSelectContent={() => {
                onClickRegion(item);
              }}
            >
              {item}
            </TabLabel>
          );
        })}
      </div>
    </div>
  );
}
