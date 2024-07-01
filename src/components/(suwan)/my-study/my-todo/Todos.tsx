import { TTdo } from '@/dummy/studyMemberTodo';
import Todo from '../common/Todo';

export default function Todos(props: TTdo[]) {
  const { todos } = props;
  return (
    <>
<<<<<<< HEAD
      <div className="flex flex-col justify-center items-center w-full mt-[2rem] rounded-[5px] bg-white border border-gray-300">
=======
      <div className="flex flex-col justify-center items-center w-[100%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
>>>>>>> dbf71037612b344a0f2aa16ebe3a938cf3f35ceb
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">체크리스트</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              3
            </span>
            <img src="/images/studyLabel/add-square.svg" className="ml-auto" />
          </div>

          <div className=" bg-white p-6 rounded-lg w-full px-[1rem]">
            <div className="text-[1.4rem]">
              <div className="flex flex-col text-[1.4rem] gap-[.4rem]">
                {todos &&
                  todos.map((todo) => (
                    <>
                      <Todo todo={todo.todo} checked={todo.checked} />
                    </>
                  ))}
                <div className="flex-inline relative">
                  <input
                    type="text"
                    className="border rounded-[.5rem] px-[1.6rem] py-[1.2rem] w-full"
                    placeholder="오늘 할 일을 입력하세요"
                  ></input>
                  <img
                    className="absolute top-6 right-6"
                    src="/images/studyLabel/check.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
