export async function postTodoInfo(data: any) {
  try {
    const response = await fetch(`/api/study-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Server Response:', result);
    return result;
  } catch (error) {
    console.log('Error checkList info', error);
  }
}
