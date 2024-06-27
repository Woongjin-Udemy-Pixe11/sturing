export default function Header() {
  return (
    <>
      <div className="flex justify-start items-center w-full h-[5.4rem] bg-black relative gap-16 px-4">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M15 19L8 11.5L15 4"
            stroke="#F9F9F9"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </>
  );
}
