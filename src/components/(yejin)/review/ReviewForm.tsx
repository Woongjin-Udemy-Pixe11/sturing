'use client';
import LongButton from '@/components/common/LongButton';
import { insertReview } from '@/lib/actions/reviewAction';
import { getSession } from '@/utils/getSessions';
import { useState } from 'react';
import StudyTop from '../StudyTop';
import ToggleEmoji from './ToggleEmoji';

export default function ReviewForm() {
  const [content, setContent] = useState('');
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleSelect = (imgNumber: number) => {
    setSelectedNumber(imgNumber);
  };

  const handleSubmit = async () => {
    if (selectedNumber === null) {
      alert('평가를 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('score', selectedNumber.toString());
    formData.append('content', content);

    const session = await getSession();
    if (session?.user?.id) {
      formData.append('userId', session.user.id);
    }
    // formData.append('studyId', studyId);

    try {
      const result = await insertReview(formData);
      if (result.success) {
        alert('리뷰가 성공적으로 제출되었습니다.');
      } else {
        alert('리뷰 제출에 실패했습니다: ' + result.message);
      }
    } catch (error) {
      console.error('리뷰 제출 중 오류 발생:', error);
      alert('리뷰 제출 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <StudyTop content="팀원 후기 남기기" />
      <div className="flex items-center border-y border-gray-300 px-[1.6rem] py-[2rem]">
        <div className="w-[6rem] h-[6rem] bg-main-600 rounded-full mr-[1.2rem]">
          <img src="" alt="" />
        </div>
        <div>
          <span className="text-gray-900 font-semibold text-[1.6rem] mb-[1rem]">
            UXUI 취준생
          </span>
          <p className="text-content-2 text-gray-700 font-medium">
            3시간에 끝내는 AI그림 스터디
          </p>
        </div>
      </div>

      <div className="flex flex-col px-[1.6rem]">
        <div className="mt-[4.4rem] mb-[5.4rem]">
          <h2 className="mb-[2rem] text-[2rem] font-semibold text-gray-1000">
            {}님과의 스터디는 어떠셨나요?
          </h2>
          <div className="flex justify-between">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex flex-col items-center">
                <ToggleEmoji
                  imgNumber={number}
                  isSelected={selectedNumber === number}
                  onSelect={handleSelect}
                />
                <span className="mt-[1.4rem]">
                  {number === 1
                    ? '별로예요'
                    : number === 2
                    ? '좋아요'
                    : '최고예요!'}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-[0.5rem] text-[2rem] font-semibold text-gray-1000">
            팀원 후기를 알려주세요.
          </h2>
          <p className="text-content-1 mb-[2rem] text-gray-700">
            해당 피드백은 익명으로 상대방에게만 보여집니다.
          </p>
          <textarea
            id="content"
            maxLength={500}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="후기를 적어주세요 (선택사항)"
            className="w-full px-[1.6rem] py-[1.2rem] p-3 border border-gray-300 rounded-[0.5rem] text-gray-900 placeholder:text-gray-600 placeholder:text-content-1"
            rows={7}
          ></textarea>
          <div className="flex justify-end w-full text-content-2 mt-[0.1rem] mb-[2rem]">
            <span className="text-gray-900">{content.length}</span>
            <span className="text-gray-400">/500</span>
          </div>
          <div className="py-[1.6rem]">
            <LongButton onClick={() => handleSubmit()} color="blue">
              완료
            </LongButton>
          </div>
        </div>
      </div>
    </div>
  );
}
