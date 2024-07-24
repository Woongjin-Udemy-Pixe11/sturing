// 'use server';
// import { revalidatePath } from 'next/cache';

export async function fetchBookmark(
  target: string,
  userId: string,
  targetId: string,
) {
  const res = await fetch(
    `/api/study-detail/bookmark/?userId=${userId}&targetId=${targetId}`,
  );
  if (!res.ok) throw new Error('Failed to fetch bookmark');
  return await res.json();
}

export async function postBookmark(
  target: string,
  userId: string,
  targetId: string,
) {
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

export async function updateBookmark(
  target: string,
  userId: string,
  targetId: string,
) {
  let isChecked = false;
  try {
    fetchBookmark(target, userId, targetId).then((bookmark) => {
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
    await res.json();
    //revalidatePath(`${process.env.LOCAL_URL}/users/${userId}/mybookmark`);
    return Response.json({ message: '성공했습니다!' });
  } catch (err) {
    console.error('update bookmark error', err);
  }
}
