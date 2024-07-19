export async function fetchLecture(lectureId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureURL`,
  );

  return res.json();
}

export async function fetchStudy(studyId: any) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/study?id=${studyId}`);

  return res.json();
}

export async function fetchMember(studyId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-member?studyId=${studyId}`,
  );
  return res.json();
}

export async function fetchBoardList(boardType: string, studyId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&studyId=${studyId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchNotice(blackboardId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/notice?noticeId=${blackboardId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchBlackboard(boardType: string, blackboardId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&blackboardId=${blackboardId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchUser(id: string) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/users?id=${id}`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function patchView(noticeId: string) {
  try {
    const response = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/notice`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noticeId }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error UserEdit:', error);
  }
}

export async function fetchIcon(blackboardId: string) {
  const res = await fetch(
    `/api/study-board/notice/icon?blackboardId=${blackboardId}`,
    { cache: 'no-store' },
  );
  return res.json();
}

type TPostIconProps = {
  blackboardId: string;
  iconName: string;
  userId: string;
};

export async function postIcon(props: TPostIconProps) {
  const { blackboardId, iconName, userId } = props;

  try {
    const response = await fetch(`/api/study-board/notice/icon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blackboardId,
        iconName,
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error UserEdit:', error);
  }
}

export async function deleteNotice(blackboardId: string) {
  const res = await fetch(`/api/study-board?blackboardId=${blackboardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
