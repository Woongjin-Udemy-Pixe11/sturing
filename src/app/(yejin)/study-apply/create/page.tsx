import LongButton from '@/components/common/LongButton';
import StudyForm from '@/components/common/StudyForm';

export default function page() {
  return (
    <div className="w-full px-[1.6rem] pb-[1.6rem] flex flex-col justify-between ">
      <div className="mb-[4rem]">
        <button className="w-full text-left border-b-[0.4rem] border-main-600 mb-[2rem] py-[1.6rem] pl-[] text-gray-600 text-content-1">
          취소
        </button>
        <StudyForm
          heading="스터디 지원글 작성하기"
          titleLabel="지원글 제목"
          contentLabel="지원 동기"
          titlePlaceholder="스터디 모집자에게 나를 어필할 수 있는 한마디"
          contentPlaceholder="지원글을 입력해 주세요 (ex-나의 성격, 장점, 지원동기)"
        />
      </div>
      <LongButton color="blue">작성하기</LongButton>
    </div>
  );
}
