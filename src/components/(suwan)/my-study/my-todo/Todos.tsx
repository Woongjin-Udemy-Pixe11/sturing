export default function Todos() {
  return (
    <>
      <div className="text-[1.4rem] py-[2rem]">
        <div className="flex justify-around items-center mb-4 text-[1.4rem]">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.profileImage}
                className="w-[4rem] rounded-full"
              />
              <span className="mt-2">{member.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col text-[1.4rem]">
          {teamMembers[0].todos.map((todo) => (
            <>
              <Todo todo={todo.todo} checked={todo.checked} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
