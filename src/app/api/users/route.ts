import { getServerSession } from 'next-auth';

import { getUserData } from '@/libs/apis';
import { authOptions } from '@/libs/auth';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 500 });
  }

  const userId = session.user.id;

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error) {
    return new NextResponse('Authentication Required', { status: 400 });
  }
}