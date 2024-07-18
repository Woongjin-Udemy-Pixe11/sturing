import connectDB from '@/lib/db';
import { BlackboardIcon } from '@/lib/schemas/blackboardIconSchema';

export async function GET(request: Request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const blackboardId = searchParams.get('blackboardId');

  if (!blackboardId) {
    return Response.json(
      { message: 'blackboardId is required' },
      { status: 400 },
    );
  }

  try {
    const icons = await BlackboardIcon.find({ blackboardId });

    return Response.json(icons);
  } catch (error) {
    console.error('Error fetching icons:', error);
    return Response.json({ message: 'Error fetching icons' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  connectDB();
  const { blackboardId, iconName, userId } = await request.json();
  try {
    let icon = await BlackboardIcon.findOne({ blackboardId, iconName });

    if (!icon) {
      icon = new BlackboardIcon({ blackboardId, iconName, users: [userId] });
    } else {
      const userIndex = icon.users.indexOf(userId);
      if (userIndex > -1) {
        // userId가 이미 존재하면 제거
        icon.users.splice(userIndex, 1);
      } else {
        // userId가 존재하지 않으면 추가
        icon.users.push(userId);
      }
    }

    await icon.save();

    return Response.json(icon);
  } catch (error) {
    return Response.json({ message: 'Error post Icon' });
  }
}
