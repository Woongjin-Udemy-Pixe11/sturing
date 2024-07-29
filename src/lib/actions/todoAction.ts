export async function fetchTodos(studyId: string, userId: string) {
  try {
    const res = await fetch(`/api/study-todo?study=${studyId}&user=${userId}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.error('Fetch todo error:', error);
  }
}

//TODO:캐시처리할것
type TTodo = {
  studyId: string;
  userId: string;
  todoContent: string;
  todoCompleted: boolean;
  date: Date;
};
export async function postTodo(data: TTodo) {
  try {
    const response = await fetch(`/api/study-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return { success: true, result };
  } catch (error) {
    console.log('Error postTodo', error);
    return { success: false, message: 'Error Post Todo' };
  }
}
export async function patchTodoInfo(todoId: string) {
  try {
    const response = await fetch(`/api/study-todo`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoId),
    });

    return Response.json({ message: '성공' });
  } catch (error) {
    console.log('Error patch todo', error);
  }
}

export async function deleteTodoInfo(todoId: string) {
  try {
    const response = await fetch(`/api/study-todo`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoId),
    });
    return Response.json({ message: '성공' });
  } catch (error) {
    console.log(error);
  }
}
