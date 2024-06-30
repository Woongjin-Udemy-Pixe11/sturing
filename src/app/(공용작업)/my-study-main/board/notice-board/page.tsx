import BoardTop from '../_component/BoardTop';
import NoticeBoardList from '../_component/NoticeBoardList';

const notices = [
  {
    blackboardId: 1,
    blackboardWriteId: 101,
    blackboardTitle:
      '이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으시면 말씀해주세요.',
    blackboardContent: '이 공지사항은 첫 번째입니다.',
  },
  {
    blackboardId: 2,
    blackboardWriteId: 102,
    blackboardTitle: '두 번째 공지사항',
    blackboardContent: '이 공지사항은 두 번째입니다.',
  },
];

export default function page() {
  return (
    <>
      <BoardTop title={'공지사항'} href="./notice-board/write" isButton />
      <NoticeBoardList notices={notices} />
    </>
  );
}
