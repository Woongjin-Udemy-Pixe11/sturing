import { Tmatching } from '@/types/TSession';

export async function postMatchingInfo(data: Tmatching) {
  try {
    const response = await fetch('/api/matching', {
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
    console.error('Error posting matching info:', error);
  }
}

export async function updateMatchingInfo(data: Tmatching) {
  try {
    const response = await fetch('/api/matching', {
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
