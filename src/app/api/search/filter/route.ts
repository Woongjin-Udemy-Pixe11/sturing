import connectDB from '@/lib/db';
import { Study } from '@/lib/schemas/studySchema';

export async function GET() {
  await connectDB();

  try {
    const fields = [
      '디자인',
      '개발 테크',
      '마케팅',
      '비즈니스',
      '경제',
      '외국어',
      '자격증',
      '자기계발',
      '기타',
    ];
    const people = ['3~5명', '6~9명', '10~15명'];
    const levels = [
      '비기너',
      '신입(1년 이하)',
      '주니어(1~3년차)',
      '시니어(4년 이상)',
    ];

    const fieldCounts = await Promise.all(
      fields.map(async (field) => {
        const count = await Study.countDocuments({ studyCategory: field });
        return { [field]: count };
      }),
    );

    const peopleCounts = await Promise.all(
      people.map(async (range) => {
        let query = {};
        if (range === '3~5명') query = { studyMember: { $gte: 3, $lte: 5 } };
        else if (range === '6~9명')
          query = { studyMember: { $gte: 6, $lte: 9 } };
        else if (range === '10~15명')
          query = { studyMember: { $gte: 10, $lte: 15 } };
        const count = await Study.countDocuments(query);
        return { [range]: count };
      }),
    );

    const levelCounts = await Promise.all(
      levels.map(async (level) => {
        const count = await Study.countDocuments({ studyLevel: level });
        return { [level]: count };
      }),
    );

    const result = {
      fields: Object.assign({}, ...fieldCounts),
      people: Object.assign({}, ...peopleCounts),
      levels: Object.assign({}, ...levelCounts),
    };

    result.fields['전체'] = await Study.countDocuments();
    result.people['상관없음'] = await Study.countDocuments();
    result.levels['상관없음'] = await Study.countDocuments();

    return Response.json(result);
  } catch (error) {
    console.error('Error fetching filter counts:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
