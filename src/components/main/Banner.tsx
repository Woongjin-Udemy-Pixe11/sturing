export default function Banner() {
  return (
    <figure className="w-full">
      <img
        className="w-full"
        src="/images/main-banner.png"
        alt="스터디 출석률 100% 달성하면 혜택을 받을 수 있는 이벤트 배너 이미지"
      />
      <figcaption className="sr-only">
        <b>동기부여가 필요할 때!</b>
        <span>스터디 출석률 100% 달성하고 혜택을 받아보세요.</span>
        <span>
          스터디 출석 이벤트에 참여하여 100% 출석률을 달성하면 다양한 혜택을
          받을 수 있습니다.
        </span>
      </figcaption>
    </figure>
  );
}
