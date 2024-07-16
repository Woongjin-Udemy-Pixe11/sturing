export async function fetchBookmark(userId: string, studyId: string) {
  if (!userId || !studyId) throw new Error('Invalid ID');
  const res = await fetch(
    `/api/study-detail/bookmark/?userId=${userId}&studyId=${studyId}`,
  );
  if (!res.ok) throw new Error('Failed to fetch bookmark');
  return await res.json();
}

export async function postBookmark(userId: string, studyId: string) {
  try {
    const res = await fetch(
      `/api/study-detail/bookmark/?userId=${userId}&studyId=${studyId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetId: `${studyId}`,
          checked: true,
          userId: `${userId}`,
        }),
      },
    );
    if (!res.ok) {
      throw new Error('Failed to post bookmark');
    }

    return await res.json();
  } catch (err) {
    console.error('post bookmark error', err);
  }
}

export async function updateBookmark(userId: string, studyId: string) {
  let isChecked = false;
  try {
    fetchBookmark(userId, studyId).then((bookmark) => {
      const { checked } = bookmark;
      isChecked = checked;
    });
    const res = await fetch(
      `/api/study-detail/bookmark/?userId=${userId}&studyId=${studyId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!res.ok) {
      throw new Error('Failed to patch bookmark');
    }
    return await res.json();
  } catch (err) {
    console.error('update bookmark error', err);
  }
}
