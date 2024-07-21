'use server';

import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

export type FilterState = {
  field: string[];
  region: string[];
  people: string[];
  period: string;
  level: string[];
};

export async function getFilteredResults(filterState: FilterState) {
  await connectDB();

  console.log('Received filter state:', filterState);

  let query: any = {};

  if (filterState.field.length > 0 && !filterState.field.includes('전체')) {
    query.studyCategory = { $in: filterState.field };
  }
  if (filterState.region.length > 0) {
    query.studyPlace = { $in: filterState.region };
  }
  if (
    filterState.people.length > 0 &&
    !filterState.people.includes('상관없음')
  ) {
    query.$or = filterState.people.map((range) => {
      if (range === '3~5명') {
        return { studyMember: { $gte: 3, $lte: 5 } };
      } else if (range === '6~9명') {
        return { studyMember: { $gte: 6, $lte: 9 } };
      } else if (range === '10~15명') {
        return { studyMember: { $gte: 10, $lte: 15 } };
      }
      return {};
    });
  }
  if (filterState.period) {
    const [startDate, endDate] = filterState.period
      .split(' - ')
      .map((date) => new Date(date));
    query.$and = [
      { studyStart: { $lte: endDate } },
      { studyEnd: { $gte: startDate } },
    ];
  }
  if (filterState.level.length > 0 && !filterState.level.includes('상관없음')) {
    query.studyLevel = { $in: filterState.level };
  }

  try {
    const studies = await Study.find(query).lean();

    return {
      searchstudies: studies.map((study) => ({
        id: study._id?.toString(),
        studyName: study.studyName,
        studyType: study.studyType,
        studyCategory: study.studyCategory,
        studyImage: study.studyImage,
        studyStart: new Date(study.studyStart).toISOString(),
        studyEnd: new Date(study.studyEnd).toISOString(),
        studyMember: study.studyMember,
        studyJoinMember: study.studyJoinMember,
        studyMeetings: study.studyMeetings,
        studyPlace: study.studyPlace,
      })),
    };
  } catch (error) {
    console.error('Error fetching filtered results:', error);
    return { searchstudies: [] };
  }
}
