import { TStudyInfo } from './TStudyInfo';

export type TgetUserStudies = {
  active: TStudyInfo[];
  completed: TStudyInfo[];
  upcoming: TStudyInfo[];
};
