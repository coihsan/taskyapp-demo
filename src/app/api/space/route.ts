import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  req: Request,
  { params }: { params: { workspaceId: string } }
) {
  try {
    if (!params.workspaceId) {
      return new NextResponse('Workspace ID is required', { status: 400 });
    }

    const spaces = await db.space.findMany({
      where: {
        workspaceId: params.workspaceId,
      },
      include: { 
        teams: { 
          include: { 
            team: true 
          } 
        } 
      }
    });

    return NextResponse.json(spaces);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
