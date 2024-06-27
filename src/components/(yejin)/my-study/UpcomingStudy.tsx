'use client';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination'; // Pagination 스타일 import
import { Pagination } from 'swiper/modules'; // Pagination 모듈 import
import { Swiper, SwiperSlide } from 'swiper/react';
import Label from '../../common/Label';

export type Study = {
  studyId: number;
  studyName: string;
  studyPlace: string;
  studyStart: string;
  studyEnd: string;
  studyType: string;
  studyMember: number;
  studyJoinMember: number;
  studyScheduleDate: string;
  studyDaysLeft: number;
  studyFormDate: string;
};

type StudyProps = {
  studies: Study[];
};

export default function UpcomingStudy(props: StudyProps) {
  const { studies } = props;

  return (
    <div className="w-full bg-gradient-to-tr from-[rgba(217,227,255,0.4)] to-[rgba(255,228,224,0.4)] px-[1.6rem] py-[2.8rem]">
      <h2 className="font-semibold text-[2.0rem] mb-[2rem]">다가오는 스터디</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {studies.map((study) => (
          <SwiperSlide key={study.studyId}>
            <Link
              href="/test"
              className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
            >
              <div className="[&>span]:ml-0 [&>span]:mr-[0.4rem]">
                <Label isBlue={true} children="D-3" />
                <Label children={study.studyStart} />
              </div>
              <h3 className="font-semibold text-[1.6rem] text-gray-900 truncate">
                {study.studyName}
              </h3>
              <div className="flex bg-gray-100 p-[0.8rem] gap-[0.8rem] [&>span]:text-content-2 rounded-[0.3rem]">
                <span className="text-gray-700">{study.studyPlace}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-700">
                  {study.studyStart} {study.studyScheduleDate}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
