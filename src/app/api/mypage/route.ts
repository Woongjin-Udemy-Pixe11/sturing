import connectDB from '@/lib/db';
import { Matching } from '@/lib/schemas/matchingSchema';
import { User } from '@/lib/schemas/userSchema';

export async function GET(req: Request) {
  connectDB();
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  let users = await User.findOne({ _id: `${id}` });
  let matchinginfo = await Matching.findOne({ userid: `${id}` });

  return new Response(JSON.stringify({ users, matchinginfo }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
