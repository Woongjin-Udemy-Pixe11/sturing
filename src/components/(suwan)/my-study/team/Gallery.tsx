export default function Gallery() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem] ">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">팀원 사진 인증</h2>
          </div>

          <div className="grid grid-rows-2 grid-cols-3 gap-[.4rem] py-[2rem] w-[100%]">
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
            <div className="relative w-[100%] h-[100%] rounded-[.5rem] border-2 border-gray-300 after:pb-[100%] after:block">
              <div className="absolute h-[100%] w-[100%] rounded-[.5rem] object-cover;">
                이미지
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img src="/images/studyLabel/arrow_down.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
