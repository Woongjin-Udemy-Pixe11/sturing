import { FaCircleCheck } from 'react-icons/fa6';

type TMemberAttend = {
  name: string;
  attend: boolean;
};

const membersAttend: TMemberAttend[] = [
  {
    name: '웅진',
    attend: true,
  },
  {
    name: '갓생살자',
    attend: true,
  },
  {
    name: '취뽀기원',
    attend: false,
  },
  {
    name: '마스터',
    attend: false,
  },
];

export default function Attend() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">출석체크 현황</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              2/4
            </span>
          </div>

          <div className="w-full flex flex-row justify-between text-[1.4rem] p-[2rem]">
            {membersAttend.map((member) => (
              <>
                <label className="inline-flex items-center space-x-[]  relative">
                  <input
                    id="checkbox"
                    type="checkbox"
                    // checked={todo.checked}
                    // onChange={() => {
                    //   setChecked(!checked);
                    // }}
                    className="form-checkbox hidden "
                  />
                  <div className="flex flex-col justify-center items-center space-y-[1rem]">
                    <label htmlFor="checkbox" className="">
                      {member.attend ? (
                        <FaCircleCheck
                          size={20}
                          color="rgba(65, 113, 255, 1)"
                        />
                      ) : (
                        <FaCircleCheck
                          size={20}
                          color="rgba(227, 227, 227, 1)"
                        />
                      )}
                    </label>

                    <span className="text-content-1 text-semibold">
                      {member.name}
                    </span>
                  </div>
                </label>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
