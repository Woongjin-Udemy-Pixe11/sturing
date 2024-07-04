import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.headers.get('Authorization');

  if (token) {
    return Response.json({ message: 'no token' });
  }

  return Response.json({ message: 'token: ' + token });
}
