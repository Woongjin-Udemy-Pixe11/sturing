import connectDB from '@/lib/db';
import { StudySchedule } from '@/lib/schemas/studyScheduleSchema';

export async function GET(request: Request) {
  connectDB();
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const date = searchParams.get('date');

  try {
    const schedule = await StudySchedule.find({
      studyId: studyId,
      date: date,
    });
    return Response.json(schedule);
  } catch (error) {
    return Response.json({ message: 'Error get schedule' });
  }
}

export async function POST(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const studyId = searchParams.get('studyId');
  const { userId, title, place, date, time } = await request.json();

  try {
    const newSchedule = new StudySchedule({
      studyId,
      userId,
      title,
      place,
      date,
      time,
    });
    newSchedule.save();
    return Response.json(newSchedule);
  } catch (error) {
    console.error('Error save schedule:', error);
    return Response.json({ message: 'not saved' });
  }
}

export async function DELETE(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const scheduleId = searchParams.get('scheduleId');
  try {
    await StudySchedule.deleteOne({ _id: scheduleId });

    return Response.json({ message: 'DELETE' });
  } catch (error) {
    console.error('Error delete schedule:', error);
    return Response.json({ message: 'Schedule not delete' });
  }
}
