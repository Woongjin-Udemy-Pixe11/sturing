export async function fetchBookmark(userId: string, targetId: string) {
  const res = await fetch(
    `/api/study-detail/bookmark/?userId=${userId}&targetId=${targetId}`,
  );
  if (!res.ok) throw new Error('Failed to fetch bookmark');
  return await res.json();
}

export async function postBookmark(userId: string, targetId: string) {
  try {
    const res = await fetch(
      `/api/study-detail/bookmark/?userId=${userId}&targetId=${targetId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetId: `${targetId}`,
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

export async function updateBookmark(userId: string, targetId: string) {
  let isChecked = false;
  try {
    fetchBookmark(userId, targetId).then((bookmark) => {
      const { checked } = bookmark;
      isChecked = checked;
    });
    const res = await fetch(
      `/api/study-detail/bookmark/?userId=${userId}&targetId=${targetId}`,
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