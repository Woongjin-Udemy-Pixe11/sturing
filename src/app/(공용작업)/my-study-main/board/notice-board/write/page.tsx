import LongButton from '@/components/common/LongButton';
import StudyForm from '@/components/common/StudyForm';
import BoardTop from '../../_component/BoardTop';

export default function page() {
  return (
    <div>
      <BoardTop />
      <div className="p-[1.6rem]">
        <StudyForm
          heading="공지 작성"
          titleLabel="글 제목"
          contentLabel="제목을 입력해 주세요"
          titlePlaceholder="내용"
          contentPlaceholder="내용을 입력해 주세요"
        />
        <LongButton className={'mt-[4rem]'} color="blue">
          등록하기
        </LongButton>
      </div>
    </div>
  );
}
