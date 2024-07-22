import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { Study } from '@/lib/schemas/studySchema';
import { StudyMember } from '@/lib/schemas/studyMemberSchema';

connectDB();

async function getStudies(sort?: string | null, userId?: string) {
  let query = Study.find();

  if (userId) {
    const matching = await Matching.findOne({ userid: userId });

    if (sort === 'type') {
      query = query.find({ studyType: matching.studyType }).limit(3);
    } else if (sort === 'category') {
      query = query.find({ studyCategory: matching.interests[0] }).limit(3);
    }
  } else {
    if (sort === 'popular') {
      query = query.sort({ studyViews: -1 }).limit(3);
    } else if (sort === 'recent') {
      query = query.sort({ createdAt: -1 }).limit(3);
    }
  }

  return await query.exec();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort') || undefined;
  const userId = searchParams.get('userId') || undefined;

  const id = searchParams.get('id');
  if (id) {
    try {
      const study = await Study.findOne({
        _id: `${id}`,
      });
      return Response.json(study);
    } catch (error) {
      console.log(error);
      return Response.json({ status: 500 });
    }
  }
  if (sort && userId) {
    try {
      const studies = await getStudies(sort, userId);
      return Response.json(studies);
    } catch (error) {
      console.log(error);
      return Response.json({ status: 500 });
    }
  }
}

export async function POST(request: Request) {
  connectDB();
  const { studyData, leaderId } = await request.json();

  try {
    const newStudy = new Study(studyData);
    await newStudy.save();
    const studyId = newStudy._id;

    await StudyMember.create({
      studyId: studyId,
      userId: leaderId,
    });

    return Response.json({ message: 'success' });
  } catch (error) {
    console.log('study post error', error);
    return Response.json({ message: 'study post error' });
  }
}
