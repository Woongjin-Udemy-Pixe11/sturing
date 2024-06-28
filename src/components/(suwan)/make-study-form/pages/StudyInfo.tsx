import StudyForm from '@/components/common/StudyForm';
import FormButton from '@/components/(suwan)/make-study-form/form/FormButton';
import SizeUpLabel from '../../../common/label/SizeUpLabel';
export default function StudyInfo() {
  return (
    <>
      <div className="w-full px-[1rem]">
        <div className="w-[375px] h-1 bg-[#f3f3f3]" />
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/20">
                      스터디 대표 사진
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[70px] h-[70px] relative gap-[14.736842155456543px] p-[7.3684210777282715px] rounded-[5px] bg-white border border-[#e3e3e3]">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[29.47px] h-[29.47px] relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M22.37 7.63103C21.6209 7.63103 20.9332 7.20121 20.5893 6.53805L19.7051 4.75735C19.1402 3.6398 17.6665 2.71875 16.4139 2.71875H13.6016C12.3367 2.71875 10.863 3.6398 10.2981 4.75735L9.41386 6.53805C9.07 7.20121 8.38228 7.63103 7.63315 7.63103C4.96824 7.63103 2.85596 9.8784 3.02789 12.531L3.66649 22.6749C3.81386 25.2047 5.17701 27.2802 8.56649 27.2802H21.4367C24.8261 27.2802 26.177 25.2047 26.3367 22.6749L26.9753 12.531C27.1472 9.8784 25.0349 7.63103 22.37 7.63103ZM13.1595 9.16612H16.8437C17.3472 9.16612 17.7647 9.58366 17.7647 10.0872C17.7647 10.5907 17.3472 11.0082 16.8437 11.0082H13.1595C12.656 11.0082 12.2384 10.5907 12.2384 10.0872C12.2384 9.58366 12.656 9.16612 13.1595 9.16612ZM15.0016 22.5152C12.7174 22.5152 10.8507 20.6609 10.8507 18.3644C10.8507 16.0679 12.7051 14.2135 15.0016 14.2135C17.2981 14.2135 19.1525 16.0679 19.1525 18.3644C19.1525 20.6609 17.2858 22.5152 15.0016 22.5152Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <StudyForm
            titlePlaceholder="내 스터디를 돋보이게 하는 한마디 (최소 5자 이상)"
            contentPlaceholder="소개글을 입력해 주세요 (최소 20자 필수)"
            titleMaxLength={24}
            contentMaxLength={250}
            heading="스터디에 대해 소개해 주세요"
            titleLabel="스터디 모집글 제목"
            contentLabel="스터디 소개"
          />
          <div className="flex gap-2">
            <SizeUpLabel children="온라인" isClicked={true} />
            <SizeUpLabel children="오프라인" />
          </div>
          <div>
            <input type="checkbox" />
            <label>추후협의</label>
          </div>
        </div>
        <div className="flex justify-between">
          <FormButton isBlue={false} content="이전" />
          <FormButton isBlue={true} content="다음" />
        </div>
      </div>
    </>
  );
}
