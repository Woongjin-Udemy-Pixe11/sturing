'use client';

import { TStudy } from '@/types/TStudy';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Label from '../../common/label/Label';

type StudyProps = {
  upcomingStudies: TStudy[];
};

export default function UpcomingStudy(props: StudyProps) {
  const { upcomingStudies } = props;

  // 날짜 형식을 바꾸는 함수
  const formatDate2 = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padEnd(2, '월');
    const day = String(date.getDate()).padEnd(3, '일');
    return `${month} ${day}`;
  };

  // 남은 날짜를 계산하는 함수
  const daysLeft = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = start.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // 시간만 뺴오는 함수
  const formatTime = (timeString: string) => {
    if (timeString.includes('추후협의')) {
      return '추후협의';
    }
    // 요일만 추출 (첫 번째 단어)
    const [day, time] = timeString.split(' ');
    const [hour, minute] = time.split(':');
    const endHour = (parseInt(hour) + 1) % 24;

    return `${hour}:${minute} ~ ${endHour
      .toString()
      .padStart(2, '0')}:${minute}`;
  };

  return (
    <div className="w-full bg-gradient-to-tr from-[rgba(217,227,255,0.4)] to-[rgba(255,228,224,0.4)] px-[1.6rem] py-[2.8rem]">
      <h2 className="font-semibold text-[2.0rem] mb-[2rem]">다가오는 스터디</h2>
      {upcomingStudies.length === 0 ? (
        <div className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem]">
          <p className="text-content-1 text-gray-700">
            다가오는 스터디가 없습니다.
          </p>
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {upcomingStudies &&
            upcomingStudies.map((study) => (
              <SwiperSlide key={study._id}>
                <Link
                  href="/my-study-main/{study._id}/team"
                  className="bg-white w-full flex flex-col gap-[0.8rem] px-[2rem] py-[2.4rem] rounded-[0.8rem] border border-gray-300"
                >
                  <div className="[&>span]:ml-0 [&>span]:mr-[0.4rem]">
                    <Label
                      isBlue={true}
                      children={`D-${daysLeft(study.studyStart)}`}
                    />
                    <Label children={formatDate2(study.studyStart)} />
                  </div>
                  <h3 className="font-semibold text-[1.6rem] text-gray-900 truncate">
                    {study.studyName}
                  </h3>
                  <div className="flex bg-gray-100 p-[0.8rem] gap-[0.8rem] [&>span]:text-content-2 rounded-[0.3rem]">
                    <span className="text-gray-700">{study.studyPlace}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-700">
                      {formatDate2(study.studyStart) + ' '}
                      {formatTime(study.studyMeetings)}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
}
