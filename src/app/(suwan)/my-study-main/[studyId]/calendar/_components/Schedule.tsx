'use client';
import SelectInput from '@/app/(suwan)/make-study-form/_component/SelectInput';
import { useState } from 'react';

export default function Schedule() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-[2rem] rounded-[5px] px-[2rem] py-[2.4rem] bg-white border border-gray-300">
        <div className=" bg-white rounded-lg w-full ">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">06.08(토)</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              3
            </span>
            <img
              src="/images/studyLabel/add-square.svg"
              className="ml-auto"
              onClick={() => setClicked(!clicked)}
            />
          </div>

          <div className=" bg-white rounded-lg w-full ">
            <div className="text-[1.4rem]">
              {clicked ? (
                <div className="flex flex-col gap-[1rem] my-[1.2rem] border rounded-[.5rem] p-[1.6rem]">
                  <div>제목</div>
                  <input
                    type="text"
                    placeholder="일정을 입력하세요"
                    className="border px-[1.6rem] py-[1.2rem] w-full"
                  />
                  <div>장소</div>
                  <input
                    type="text"
                    placeholder="스터디 장소를 입력하세요"
                    className="border px-[1.6rem] py-[1.2rem] w-full"
                  />
                  <div>시간</div>
                  <div className="flex gap-3 h-[4.5rem]">
                    <SelectInput type="time" />
                    <SelectInput type="time" />
                  </div>
                  <div className="ml-auto text-main-600">완료</div>
                </div>
              ) : (
                ''
              )}
              <div>
                <div className="flex justify-between items-center py-[1.2rem]">
                  <div className="text-[1.6rem] font-semibold">
                    2주차 정기 스터디 모임
                  </div>
                  <div className="flex gap-[1rem]">
                    <img
                      className="h-[2rem]"
                      src="/images/studyLabel/pencil.svg"
                    />
                    <img
                      className="h-[2rem]"
                      src="/images/studyLabel/trashcan.svg"
                    />
                  </div>
                </div>
                <div className="bg-gray-200 rounded-[.3rem] p-[.8rem] text-[1.2rem] text-gray-700">
                  <span>스타벅스 종로점</span>
                  <span> | </span>
                  <span>06.08(토) </span>
                  <span>오후 8:00 - 9:00</span>
                </div>
              </div>
              {/* <div className="flex flex-col text-[1.4rem]">
              

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
