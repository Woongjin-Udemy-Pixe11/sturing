'use server';
export async function AgreeStudyApply(data: any) {
  try {
    const response = await fetch('http://localhost:3000/api/studyapply', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // console.log('Server Response:', result);
    return result;
  } catch (error) {
    console.error('Error posting matching info:', error);
  }
}
