export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200  text-center py-[3.4rem]  text-gray-700">
        <ul className="flex justify-center flex-row gap-[1rem] font-semibold">
          <li>개인정보처리방침</li>
          <li className="border-x-[0.2rem] px-[1rem] border-gray-600">
            이용약관
          </li>
          <li>스터링</li>
        </ul>
        <span className="text-gray-600 my-[1rem] block">(주) 스터링</span>
        <span className="text-gray-600">(c)string. ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}
