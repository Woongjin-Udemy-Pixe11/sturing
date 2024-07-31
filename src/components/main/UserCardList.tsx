import ScrollableContainer from '../common/ScrollableContainer';
import UserCard from './UserCard';

export const dynamic = 'force-dynamic';

type TUser = {
  _id: string;
  nickname: string;
  image: string;
  sturingPercent: number;
  studyCount: number;
  matchingInfo?: {
    interests?: string[];
    level?: { [key: string]: string };
    preferRegion?: string[];
    preferMood?: string[];
  };
};

async function getTopUsers() {
  const res = await fetch(`${process.env.LOCAL_URL}/api/users/main`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch top users');
  }
  return res.json();
}

export default async function UserCardList() {
  const topUsers = await getTopUsers();

  return (
    <div className="px-[1.6rem] mb-[4rem]">
      <ScrollableContainer>
        {topUsers &&
          topUsers.map((user: TUser) => (
            <li key={user._id} className="mr-[.8rem] last:mr-0">
              <UserCard user={user} />
            </li>
          ))}
      </ScrollableContainer>
    </div>
  );
}
