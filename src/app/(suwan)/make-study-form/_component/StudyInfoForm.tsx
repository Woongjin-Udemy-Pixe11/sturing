import StudyForm from '@/components/common/StudyForm';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

type TStudyLocationType = 'online' | 'offline' | null;

type TStudyInfoFormProps = {
  onStudyInfoSubmit: (data: {
    image: File | null;
    title: string;
    content: string;
    locationType: TStudyLocationType;
    location: string;
    isPostponed: boolean;
  }) => void;
};

export default function StudyInfoForm({
  onStudyInfoSubmit,
}: TStudyInfoFormProps) {
  const [checked, setChecked] = useState(false);
  const [locationType, setLocationType] = useState<TStudyLocationType>(null);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');

  const onChangeCheckBox = () => {
    setChecked(!checked);
  };

  const handleLocationChange = (type: TStudyLocationType) => {
    setLocationType(type);
  };

  const handleImageChange = (file: File | null) => {
    if (file != null) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    onStudyInfoSubmit({
      image,
      title,
      content,
      locationType,
      location,
      isPostponed: checked,
    });
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
        onImageChange={handleImageChange}
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

        {locationType === 'online' && (
          <div className="flex items-center gap-[0.4rem]  mt-[1.2rem] px-[1.6rem] w-full border rounded-[0.5rem]">
            <img src="/images/boardIcon/location.svg" alt="" />
            <input
              type="text"
              placeholder="온라인 플랫폼을 입력해주세요. ex)Zoom"
              className="w-full py-[1.2rem] placeholder:text-content-1 text-gray-500"
            />
          </div>
        )}

        {locationType === 'offline' && (
          <div className="flex gap-[0.4rem] items-center mt-[1.2rem] px-[1.6rem] w-full border rounded-[0.5rem]">
            <img src="/images/boardIcon/globe.svg" alt="" />
            <input
              type="text"
              placeholder="스터디 장소를 입력해주세요. ex) 등촌역 스타벅스"
              className="w-full py-[1.2rem] placeholder:text-content-1 text-gray-500"
            />
          </div>
        )}
      </div>
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
    </div>
  );
}
