import { differenceInDays, differenceInHours } from 'date-fns';

export const dateCalculate = (time: string) => {
  const now = new Date();
  const createdTime = new Date(time);
  const diffInHours = differenceInHours(now, createdTime);
  const diffInDays = differenceInDays(now, createdTime);

  return diffInDays > 0 ? diffInDays + '일 전' : diffInHours + '시간 전';
};
