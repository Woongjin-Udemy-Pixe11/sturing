import { Matching } from '../schemas/matchingSchema';
import { Study } from '../schemas/studySchema';

type SortOption = 'type' | 'category' | 'popular' | 'recent' | undefined;

export async function getStudies(sort: SortOption, userId?: string) {
  let query = Study.find({
    leaderId: { $ne: userId },
    studyEnd: { $gt: new Date() },
    studyStart: { $gt: new Date() },
  });

  if (userId) {
    const matching = await Matching.findOne({ userid: userId });
    if (matching) {
      query = applyMatchingFilters(query, matching, sort);
    } else {
      query = applyDefaultFilters(query, sort);
    }
  } else {
    query = applyGeneralFilters(query, sort);
  }

  return query.exec();
}

function applyMatchingFilters(query: any, matching: any, sort: SortOption) {
  switch (sort) {
    case 'type':
      return matching.studyType === '상관없음'
        ? query.find({ studyType: { $in: ['온라인', '오프라인'] } }).limit(12)
        : query.find({ studyType: matching.studyType }).limit(12);
    case 'category':
      return query.find({ studyCategory: matching.interests }).limit(6);
    default:
      return query;
  }
}

function applyDefaultFilters(query: any, sort: SortOption) {
  switch (sort) {
    case 'type':
      return query.sort({ createdAt: -1 }).limit(12);
    case 'category':
      return query.sort({ studyViews: -1 }).limit(6);
    default:
      return query;
  }
}

function applyGeneralFilters(query: any, sort: SortOption) {
  switch (sort) {
    case 'popular':
      return query.sort({ studyViews: -1 }).limit(6);
    case 'recent':
      return query.sort({ createdAt: -1 }).limit(12);
    default:
      return query;
  }
}
