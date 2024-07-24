export async function fetchTodos(studyId: string, userId: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/study-todo?study=${studyId}&user=${userId}`,
      {
        cache: 'no-store',
      },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
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
export async function postTodoInfo(data: TTodo) {
  console.log('🥑', data);
  try {
    const response = await fetch(`http://localhost:3000/api/study-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return { success: true, result };
  } catch (error) {
    console.log('Error checkList info', error);
    return { success: false, message: 'Error Post Comment' };
  }
}
export async function patchTodoInfo(data: any) {
  try {
    const response = await fetch(`http://localhost:3000/api/study-todo`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return Response.json({ message: '성공' });
  } catch (error) {
    console.log('Error checkList info', error);
  }
}

export async function deleteTodoInfo(data: any) {
  try {
    const response = await fetch(`http://localhost:3000/api/study-todo`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return Response.json({ message: '성공' });
  } catch (error) {
    console.log(error);
  }
}
