type TToastProps = {
  message: string;
};

export default function Toast(props: TToastProps) {
  const { message } = props;

  return (
    <>
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-[#555] bg-opacity-95 w-[70%] text-center px-[2rem] py-[1rem] rounded-[0.8rem] text-white z-50">
        <span className="text-text-caption text-content-1">{message}</span>
      </div>
    </>
  );
}
