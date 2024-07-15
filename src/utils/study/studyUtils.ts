import { TFetchStudy } from '@/types/TStudy';

export async function postStudy(data: TFetchStudy, leaderId: string) {
  try {
    const response = await fetch(`/api/study`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data, leaderId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Server Response:', result);
    return result;
  } catch (error) {
    console.error('Error posting study:', error);
  }
}
