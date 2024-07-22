export async function fetchSchedule(studyId: string) {
  try {
    const res = await fetch(`/api/study-schedule?studyId=${studyId}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function postSchedule(
  studyId: string,
  userId: string,
  title: string,
  place: string,
  date: Date,
  time: string,
) {
  try {
    const response = await fetch(`/api/study-schedule?studyId=${studyId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        studyId,
        userId,
        title,
        place,
        date,
        time,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    console.error('Error UserEdit:', error);
    return { success: false, message: 'Error Post Comment' };
  }
}

export async function deleteSchedule(scheduleId: string) {
  const res = await fetch(`/api/study-schedule?scheduleId=${scheduleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
