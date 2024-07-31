import StudyForm from '@/components/common/StudyForm';
import { useMemo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import LongButton from '@/components/common/LongButton';

export default function StudyInfoForm(props: any) {
  const { setStep, study, onClickStepTwo } = props;

  const [checked, setChecked] = useState(false);
  const [studyType, setStudyType] = useState<'온라인' | '오프라인' | null>(
    null,
  );
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');

  const onChangeImage = (img: File | null) => {
    if (img !== null) {
      setImage(img);
    } else {
      setImage(null);
    }
  };

  const onChangeCheckBox = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    if (newCheckedState) {
      setLocation('추후협의');
    } else {
      setLocation('');
    }
  };

  const handleLocationChange = (type: '온라인' | '오프라인' | null) => {
    setStudyType(type);
  };

  const onChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  let data = {
    image: image,
    title: title,
    content: content,
    studyType: studyType,
    location: location,
  };

  const validate = useMemo(() => {
    return (
      image == null ||
      title == '' ||
      title.length < 5 ||
      content == '' ||
      content.length < 20 ||
      studyType == null ||
      location == ''
    );
  }, [image, title, content, studyType, location]);

  const onClickNext = () => {
    onClickStepTwo(data);
    setStep((prev: number) => prev + 1);
  };

  return (
    <div className="p-[1.6rem]">
      <StudyForm
        heading="스터디에 대해 소개해 주세요"
        imageUpload
        imageLabel="스터디 대표 사진"
        titleLabel="스터디 모집글 제목"
        contentLabel="스터디 소개"
        titlePlaceholder="내 스터디를 돋보이게 하는 한마디 (최소 5자 이상)"
        contentPlaceholder="소개글을 입력해 주세요 (최소 20자 필수)"
        titleMinLength={5}
        contentMaxLength={250}
        contentMinLength={20}
        onImageChange={onChangeImage}
        onTitleChange={(value) => setTitle(value)}
        onContentChange={(value) => setContent(value)}
      />
      <div className="mt-[2rem]">
        <div className="flex gap-[0.8rem] text-content-1">
          <button
            onClick={() => handleLocationChange('온라인')}
            className={`px-[1.2rem] py-[0.4rem] rounded-[0.3rem] border border-gray-300 ${
              studyType === '온라인'
                ? 'bg-main-100 text-main-600 border-main-600'
                : 'bg-white text-gray-600'
            }`}
          >
            온라인
          </button>
          <button
            onClick={() => handleLocationChange('오프라인')}
            className={`px-[1.2rem] py-[0.4rem] rounded-[0.3rem] text-gray-600 border border-gray-300 ${
              studyType === '오프라인'
                ? 'bg-main-100 text-main-600 border-main-600'
                : 'bg-white text-gray-600'
            }`}
          >
            오프라인
          </button>
        </div>

        <div className="mt-[1.2rem]">
          {studyType === '온라인' && (
            <div className="flex-inline relative">
              <input
                type="text"
                placeholder="온라인 플랫폼을 입력해주세요. ex)Zoom"
                value={location}
                onChange={onChangeLocation}
                disabled={checked}
                className={`border rounded-[.5rem] pl-[4rem] pr-[1.6rem] py-[1.2rem] w-full placeholder:text-content-1 ${
                  checked && 'text-gray-500'
                }`}
              ></input>
              <img
                className="absolute top-6 left-6 w-[2rem]"
                src="/images/boardIcon/location.svg"
              />
            </div>
          )}

          {studyType === '오프라인' && (
            <div className="flex-inline relative">
              <input
                type="text"
                placeholder="스터디 장소를 입력해주세요. ex) 등촌역 스타벅스"
                value={location}
                onChange={onChangeLocation}
                disabled={checked}
                className={`border rounded-[.5rem] pl-[4rem] pr-[1.6rem] py-[1.2rem] w-full placeholder:text-content-1 ${
                  checked && 'text-gray-500'
                }`}
              ></input>
              <img
                className="absolute top-6 left-6 w-[2rem] px-[.2rem]"
                src="/images/boardIcon/globe.svg"
              />
            </div>
          )}
        </div>
      </div>
      {studyType != null && (
        <label className="inline-flex items-center space-x-2 py-[1.2rem] relative">
          <input
            id="checkbox"
            type="checkbox"
            checked={checked}
            onChange={onChangeCheckBox}
            className="form-checkbox h-[1.8rem] w-[1.8rem] bg-gray-400 rounded-full  appearance-none checked:bg-main-600 peer "
          />
          <label
            htmlFor="checkbox"
            className="absolute text-white text-content-2 top-1/2 left-[-2%] transform -translate-y-1/2"
          >
            <FiCheck />
          </label>

          <span className="text-gray-600 text-content-1 text-ge">추후협의</span>
        </label>
      )}

      <footer className="flex m-auto gap-[1rem] w-full py-[2rem]">
        <LongButton
          color="white"
          className="w-[40%]"
          onClick={() => {
            setStep((prev: number) => prev - 1);
          }}
        >
          이전
        </LongButton>

        {validate ? (
          <LongButton color="gray">다음</LongButton>
        ) : (
          <LongButton color="blue" onClick={onClickNext}>
            다음
          </LongButton>
        )}
      </footer>
    </div>
  );
}
