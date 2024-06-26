import { dummyUserCardList } from '@/dummy/mainPage';
import ScrollableContainer from './ScrollableContainer';
import UserCard from './UserCard';

export default function UserCardList() {
  return (
    <ScrollableContainer>
      {dummyUserCardList &&
        dummyUserCardList.map((user) => (
          <UserCard
            userName={user.userName}
            userImage={user.userImage}
            intersetName={user.intersetName}
            intersetLevel={user.intersetLevel}
            studyMoodContent={user.studyMoodContent}
            userIndex={user.userIndex}
            userStudyCount={user.userStudyCount}
          />
        ))}
    </ScrollableContainer>
  );
}
