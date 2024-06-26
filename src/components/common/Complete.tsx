import Button from './Button';

type TCompleteProps = {
  heading: string;
  subheading1: string;
  subheading2: string;
  onButtonClick?: () => void;
};

export default function Complete({
  heading,
  subheading1,
  subheading2,
  onButtonClick,
}: TCompleteProps) {
  return (
    <div className="flex flex-col items-center w-full h-screen relative justify-center">
      <div className="mb-[1.4rem]">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 0C24.8688 0 18.8753 1.81812 13.7773 5.22444C8.67941 8.63076 4.70606 13.4723 2.35975 19.1368C0.0134318 24.8013 -0.600471 31.0344 0.59567 37.0478C1.79181 43.0612 4.74428 48.5849 9.0797 52.9203C13.4151 57.2557 18.9388 60.2082 24.9522 61.4043C30.9656 62.6005 37.1987 61.9866 42.8632 59.6403C48.5277 57.2939 53.3692 53.3206 56.7756 48.2227C60.1819 43.1247 62 37.1312 62 31C61.9906 22.7812 58.7215 14.9017 52.9099 9.09007C47.0983 3.27848 39.2188 0.00940262 31 0ZM47.1417 23.6012L27.9605 42.7824C27.6727 43.0703 27.331 43.2987 26.9549 43.4546C26.5788 43.6104 26.1758 43.6906 25.7687 43.6906C25.3616 43.6906 24.9585 43.6104 24.5824 43.4546C24.2063 43.2987 23.8646 43.0703 23.5769 42.7824L14.8583 34.0637C14.283 33.4811 13.9616 32.6947 13.9642 31.876C13.9667 31.0573 14.2931 30.2728 14.872 29.6939C15.4509 29.115 16.2353 28.7886 17.054 28.786C17.8727 28.7834 18.6592 29.1048 19.2417 29.6801L25.7687 36.207L42.7583 19.2176C43.3409 18.6423 44.1273 18.3209 44.946 18.3235C45.7647 18.3261 46.5492 18.6525 47.128 19.2314C47.7069 19.8103 48.0333 20.5948 48.0359 21.4135C48.0384 22.2322 47.717 23.0186 47.1417 23.6012Z"
            fill="url(#paint0_linear_1123_18352)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1123_18352"
              x1="17.2885"
              y1="5.96154"
              x2="67.9615"
              y2="82.2692"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3A6CFF" />
              <stop offset="1" stop-color="#FFE4E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="text-large-title font-semibold mb-[0.8rem] tracking-[-0.03rem]">
        {heading}
      </h1>
      <p className="text-content-1 text-gray-700 text-center">
        {subheading1}
        <br />
        {subheading2}
      </p>
      <div className="w-full absolute bottom-0 px-[1.6rem] py-[1.2rem]">
        <Button color="blue" onClick={onButtonClick}>
          확인
        </Button>
      </div>
    </div>
  );
}