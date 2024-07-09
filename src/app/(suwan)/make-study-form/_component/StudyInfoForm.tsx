import StudyForm from '@/components/common/StudyForm';
import { useMemo, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { TStudyInfoFormProps, TStudyLocationType } from '@/types/TStudyMake';
import LongButton from '@/components/common/LongButton';

type TData = {
  image: File | null;
  title: string;
  content: string;
  locationType: string | null;
  location: string;
};

export default function StudyInfoForm(props: any) {
  const { step, setStep, study, onClickStepTwo } = props;

  const [checked, setChecked] = useState(false);
  const [locationType, setLocationType] = useState<TStudyLocationType>(null);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');

  const onChangeCheckBox = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    if (newCheckedState) {
      setLocation('추후협의');
    } else {
      setLocation('');
    }
  };

  const handleLocationChange = (type: TStudyLocationType) => {
    setLocationType(type);
  };

  const onChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  console.log(location);

  let data: TData = {
    image: image,
    title: title,
    content: content,
    locationType: locationType,
    location: location,
  };

  const isNull = useMemo(() => {
    return (
      image == null ||
      title == '' ||
      content == '' ||
      locationType == null ||
      location == ''
    );
  }, [image, title, content, locationType, location]);

  const onClickNext = () => {
    onClickStepTwo(data);
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
        contentMaxLength={250}
        onImageChange={(value) => setImage(value)}
        onTitleChange={(value) => setTitle(value)}
        onContentChange={(value) => setContent(value)}
      />
      <div className="mt-[2rem]">
        <div className="flex gap-[0.8rem] text-content-1">
          <button
            onClick={() => handleLocationChange('online')}
            className={`px-[1.2rem] py-[0.4rem] rounded-[0.3rem] border border-gray-300 ${
              locationType === 'online'
                ? 'bg-main-100 text-main-600 border-main-600'
                : 'bg-white text-gray-600'
            }`}
          >
            온라인
          </button>
          <button
            onClick={() => handleLocationChange('offline')}
            className={`px-[1.2rem] py-[0.4rem] rounded-[0.3rem] text-gray-600 border border-gray-300 ${
              locationType === 'offline'
                ? 'bg-main-100 text-main-600 border-main-600'
                : 'bg-white text-gray-600'
            }`}
          >
            오프라인
          </button>
        </div>

        <div className="mt-[1.2rem]">
          {locationType === 'online' && (
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

          {locationType === 'offline' && (
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
      {locationType != null && (
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

      <footer className="flex m-auto gap-2 w-full p-4 py-[2rem]">
        <LongButton
          color="white"
          className="w-[40%]"
          onClick={() => {
            setStep((prev: number) => prev - 1);
          }}
        >
          이전
        </LongButton>

        {isNull ? (
          <LongButton color="gray">등록하기</LongButton>
        ) : (
          <LongButton
            color="blue"
            onClick={() => {
              onClickNext();
              setStep((prev: number) => prev + 1);
            }}
          >
            등록하기
          </LongButton>
        )}
      </footer>
    </div>
  );
}
