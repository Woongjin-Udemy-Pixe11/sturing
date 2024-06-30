import SectionNavigator from '@/components/common/SectionNavigator';
import TaskInfo from './_jisubin_comp/TaskInfo';

export default function page() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] my-[2.4rem] pb-[2.4rem]">
          <div className="mx-[1.6rem]">
            <SectionNavigator
              title="공지사항"
              moveLink="/my-study-main/board/noice-board"
            />
            <hr className="mx-[0.4rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
            <div className="flex flex-row items-center justify-center gap-x-[0.8rem] mb-[2.4rem]">
              <div className="min-w-[3.3rem] min-h-[2.2rem] px-[0.6rem] py-[0.2rem] bg-main-100 rounded-[0.3rem] text-center text-main-700 text-content-2 break-all">
                필독
              </div>
              <span className="text-content-2 truncate">
                이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으시면
                말씀해주세요.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[0.5rem] border-gray-300 border-[0.1rem] mx-[1.6rem] my-[2.4rem] pb-[2.4rem]">
          <div className="mx-[1.6rem]">
            <SectionNavigator
              title="과제 게시판"
              moveLink="/my-study-main/board/noice-board"
            />
            <hr className="mx-[0.4rem] mb-[1.2rem] border-b-gray-300 border-b-1"></hr>
          </div>
          <TaskInfo
            userImg="/images/dummy-member-img1.png"
            user="갓생살자"
            time="11시간 전"
            taskTitle="1주차 6월 3일 체크리스트 과제"
            taskContent="1강 5분 복습, 2강 듣고 과제 노트 작성하기 및 3강 예습하기 총 1시간
            동안 과제 인증 합니다. 내일은 시간이"
            taskImg="/images/dummy-board-img1.png"
          />

          <TaskInfo
            userImg="/images/dummy-member-img2.png"
            user="웅진"
            isLeader={true}
            time="1일전"
            taskTitle="1주차 6월 3일 체크리스트 과제"
            taskContent="1강 5분 복습, 2강 듣고 과제 노트 작성하기 및 3강 예습하기 총 1시간
            동안 과제 인증 합니다. 내일은 시간이"
            taskImg="/images/dummy-board-img1.png"
          />
        </div>
      </div>
    </>
  );
}
