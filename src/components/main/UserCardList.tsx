import ScrollableContainer from '../common/ScrollableContainer';
import UserCard from './UserCard';

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
  const res = await fetch('http://localhost:3000/api/users/main', {
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
    <ScrollableContainer>
      {topUsers &&
        topUsers.map((user: TUser) => (
          <li key={user._id}>
            <UserCard user={user} />
          </li>
        ))}
    </ScrollableContainer>
  );
}
