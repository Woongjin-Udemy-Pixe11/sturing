import { auth } from '@/auth';
import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { User } from '@/lib/schemas/userSchema';

export const getSession = async () => {
  const session: any = await auth();
  connectDB();
  if (session) {
    const userRecord = await User.findOne({ _id: session?.user.id });

    if (session.user.nickname !== userRecord.nickname) {
      return {
        ...session,
        user: {
          ...session.user,
          nickname: userRecord.nickname,
        },
      };
    }
  }
  return session;
};
