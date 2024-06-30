import Label from '@/components/common/label/Label';
import SizeUpLabel from '@/components/common/label/SizeUpLabel';

export default function SelectedCourse() {
  return (
    <>
      <div>
        <p className="text-lg font-semibold text-center text-white">다음</p>
        <div className="flex justify-start items-end w-[50px] h-[26px] gap-[4.7272725105285645px] bg-white" />
        <div className="m-2 flex space-x-2">
          <SizeUpLabel isClicked={true} children="디자인" />
          <SizeUpLabel children="개발 · 테크" />
          <SizeUpLabel children="비즈니스" />
          <SizeUpLabel children="마케팅" />
          <SizeUpLabel children="경제" />
        </div>
        <Label children="기존 라벨" />
        <div className="flex flex-col justify-start items-end w-[359px] relative gap-3.5 bg-white">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-12 h-[22px] gap-[271px]" />
          <div className="flex-grow-0 flex-shrink-0 w-[375px] h-1">
            <div className="w-[375px] h-1 absolute left-[-16.5px] top-[35.5px] bg-[#f3f3f3]" />
            <div className="w-[95px] h-1 absolute left-[-16.5px] top-[35.5px] bg-[#6284e8]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2.5 p-2.5">
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[90px] w-[343px] gap-4 px-5 py-6 rounded-lg bg-[#f3f3f3] border border-[#e3e3e3]">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-[93px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 w-[194px] text-sm font-semibold text-left text-[#010101]">
                블렌더 완벽 가이드: 초심자를 위한 3D 모델링 마스터하기{' '}
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#909090]">
                GameDev.tv Team
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-[375px] relative">
        <div className="flex-grow-0 flex-shrink-0 w-[204px] h-[74px] relative">
          <div className="w-[111.11px] h-[50px]">
            <div className="w-[111.11px] h-[50px] absolute left-[-70px] top-[11.5px] rounded-[5px] bg-white border border-[#e3e3e3]" />
            <p className="w-[98.73px] absolute left-[-63.31px] top-[25px] text-base font-semibold text-center text-[#676767]">
              이전
            </p>
          </div>
          <div className="w-[221.1px] h-[50px]">
            <div className="w-[221.1px] h-[50px] absolute left-[51.9px] top-[11.5px] rounded-[5px] bg-[#4171ff]" />
            <p className="w-[194.08px] absolute left-[65.91px] top-[25px] text-base font-semibold text-center text-white">
              다음
            </p>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[375px] h-[34px] relative bg-white">
          <div className="w-[134px] h-[5px] absolute left-[120.5px] top-[20.5px] rounded-[100px] bg-black" />
        </div>
      </div>
      <p className="text-sm text-left text-[#909090]">취소</p>
      <p className="text-xl font-semibold text-left text-[#010101]">
        선택한 강의
      </p>
    </>
  );
}
