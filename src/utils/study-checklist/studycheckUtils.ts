'use server';

import { revalidatePath } from 'next/cache';

//TODO:캐시처리할것

export async function postTodoInfo(data: any) {
  try {
    const response = await fetch(`http://localhost:3000/api/study-todo`, {
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
    revalidatePath(`/my-study-main/${data.studyId}/my-todo`);
    console.log('Server Response:', result);
    return result;
  } catch (error) {
    console.log('Error checkList info', error);
  }
}
