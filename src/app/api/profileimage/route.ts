import connectDB from '@/lib/db';
import { User } from '@/lib/schemas/userSchema';

export async function PATCH(request: Request) {
  await connectDB();
  const res = await request.json();
  console.log(res);

  const id = res.id;
  const imageurl = res.url;

  const updateProfile = await User.updateOne(
    { _id: `${id}` },
    {
      image: imageurl,
    },
  );

  return new Response(JSON.stringify({ updateProfile }));
}
