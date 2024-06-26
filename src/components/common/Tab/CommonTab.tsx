'use client';
import * as Tabs from '@radix-ui/react-tabs';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { area } from '@/constant/region';
import { useState } from 'react';
import TabLabel from './TabLabel';
import { CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';

export default function CommonTab() {
  const [selected, setSelected] = useState<string[]>([]);
  const onSelectContent = (item: string) => {
    let uniqueid: string = item;
    if (selected.length >= 3) {
      selected.shift();
    }
    setSelected([...selected, uniqueid]);
  };

  const onUnSelectContent = (item: string) => {
    let filter = selected.filter((element) => element !== item);
    setSelected(filter);
  };
  return (
    <div className="flex flex-col gap-3 w-full, overflow-y-hidden">
      <>
        <label
          htmlFor="search-input"
          className="block w-[calc(100% - 3.2rem)] mx-[1.6rem] mt-[2rem] bg-main-100 flex justify-between px-[2rem] rounded-[2.5rem]"
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

      <Tabs.Root defaultValue="서울" className="flex  ">
        <Tabs.List className="flex flex-col   w-[13.2rem] text-[1.4rem] text-[#909090]">
          <ScrollArea.Root className="w-full h-[33.3rem]  overflow-hidden  bg-white">
            <ScrollArea.Viewport className="w-full h-full ">
              {Object.keys(area).map((key, index) => {
                return (
                  <Tabs.Trigger
                    value={`${key}`}
                    key={index}
                    className={`w-[13.2rem] h-[4.9rem] py-[1.4rem] px-[4.65rem] tab-trigger`}
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

        {Object.keys(area).map((key: string, index) => {
          return (
            <Tabs.Content value={`${key}`} key={index}>
              <ScrollArea.Root className="w-[24rem] h-[33.3rem]  overflow-hidden  ">
                <ScrollArea.Viewport className="w-full h-full overflow-auto ">
                  {area[key].map((item: any, index) => {
                    let newid: string = item;

                    const bg = selected.includes(newid)
                      ? 'bg-[#ECF1FF] text-[#4171FF]'
                      : 'bg-white';
                    return (
                      <Tabs.Content
                        value={`${key}`}
                        key={index}
                        className={`${bg}  w-[24rem] h-[4.9rem] py-[1.4rem] ps-[2rem] border-b-[0.1rem] border-[#E4E4E4]`}
                        onClick={() => {
                          onSelectContent(item);
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
                  <ScrollArea.Thumb className="flex-1 h-[90%] bg-[#D0D0D0] rounded-[4px]  " />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
      <div className="flex gap-4 p-4 flex-wrap">
        {selected.map((item, index) => {
          return (
            <TabLabel
              key={index}
              onUnSelectContent={() => {
                onUnSelectContent(item);
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
