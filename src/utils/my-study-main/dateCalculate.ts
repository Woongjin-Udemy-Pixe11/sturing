import {
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

export const dateCalculate = (time: string) => {
  const now = new Date();
  const createdTime = new Date(time);

  const diffInWeeks = differenceInWeeks(now, createdTime);
  const diffInDays = differenceInDays(now, createdTime);
  const diffInHours = differenceInHours(now, createdTime);
  const diffInMin = differenceInMinutes(now, createdTime);

  if (diffInWeeks > 0) {
    return diffInWeeks + '주 전';
  } else if (diffInDays > 0) {
    return diffInDays + '일 전';
  } else if (diffInHours > 0) {
    return diffInHours + '시간 전';
  } else {
    return diffInMin + '분 전';
  }
};
