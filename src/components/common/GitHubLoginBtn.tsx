import { FaGithub } from 'react-icons/fa';

export default function GitHubLoginBtn() {
  return (
    <>
      <button className="w-[27.6rem] h-[4.6rem] bg-gray-1000 rounded-[0.8rem] text-gray-100 ">
        <div className="flex flex-row items-center justify-center gap-[1rem]">
          <FaGithub />
          <span>GitHub로 3초 만에 시작하기</span>
        </div>
      </button>
    </>
  );
}
