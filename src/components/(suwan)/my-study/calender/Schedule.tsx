export default function Schedule() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[90%] mt-[2rem] rounded-[5px] bg-white border border-gray-300">
        <div className=" bg-white p-6 rounded-lg w-full px-[2rem]">
          <div className="flex items-center border-b-[0.1rem] border-gray-300 pb-4">
            <h2 className="text-[1.6rem] font-semibold">06.08(토)</h2>
            <span className="text-[1.4rem] font-semibold text-main-600 px-[1rem]">
              3
            </span>
          </div>

          <div className=" bg-white p-6 rounded-lg w-full px-[1rem]">
            <div className="text-[1.4rem]">
              <div className="flex flex-col text-[1.4rem]">
                {/* {todos &&
                  todos.map((todo) => (
                    <>
                      <Todo todo={todo.todo} checked={todo.checked} />
                    </>
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
