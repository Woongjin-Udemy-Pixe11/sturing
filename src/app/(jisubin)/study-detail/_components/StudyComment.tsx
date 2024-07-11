import Image from 'next/image';
import { HiEllipsisVertical } from 'react-icons/hi2';
import CommentForm from './CommentForm';

export default function StudyComment() {
  return (
    <>
      <div className=" bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] mt-[2rem] pb-[2.4rem]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between mt-[2.4rem] pb-[1.2rem]">
            <h2 className="mx-[2rem] font-semibold text-gray-950">댓글</h2>
            <div className="pr-[2rem]">
              <HiEllipsisVertical />
            </div>
          </div>

          <hr className="mx-[2rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>

          <div>
            <div className="flex flex-row items-center mx-[2rem] gap-x-[0.8rem] text-content-2 justify-between">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/images/dummy-member-img1.png"
                  width={28}
                  height={28}
                  alt="User Image"
                  className="rounded-full border-gray-300 border-[0.1rem]"
                />
                <span className="ml-[0.5rem]">채니</span>
              </div>
              <span className="text-gray-600">6월 7일 오전 12:42</span>
            </div>

            <p className="text-gray-700 text-content-2 mx-[2rem] mt-[0.8rem] mb-[2rem]">
              지원해도 될까요??
            </p>
          </div>

          <CommentForm />
        </div>
      </div>
    </>
  );
}
