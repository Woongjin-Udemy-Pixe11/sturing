export type TStudyMemberTodo = {
  name: string;
  profileImage: any;
  progress?: number;
  isLeader?: boolean;
  todos: TTdo[];
};
export type TTdo = {
  todo: string;
  checked: boolean;
};

export const studyMemberTodo: TStudyMemberTodo[] = [
  {
    name: '웅진',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '1강 5분 복습하기', checked: true },
      { todo: '2강 듣고 과제노트 작성하기', checked: false },
    ],
  },
  {
    name: '갓생살자',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
  {
    name: '취뽀기원',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
  {
    name: '마스터',
    profileImage: '/images/ungin_profile.png',
    todos: [
      { todo: '밥먹기', checked: true },
      { todo: '빵먹기', checked: false },
    ],
  },
];
