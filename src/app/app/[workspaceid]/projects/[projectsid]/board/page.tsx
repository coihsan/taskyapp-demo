import React from 'react';
import { db } from '@/lib/server/db';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import CreateNewBoardButton from '../../../_components/create-new-board-btn';

type Props = {
  params: {
    projectsid: string,
    boardid: string
  }
}
const BoardPage = async ({ params } : Props) =>{
  const boardData = await db.board.findMany({
    where:{
      id: params.boardid
    }
  })
 if(!boardData) return null
  
  return (
    <div>
      <h1 className="text-4xl">Create New Board</h1>
      <div className='flex flex-nowrap gap-3 mt-4'>
        {boardData.map((board) => (
          <Card className='max-w-64 w-full h-36'>
              <Link href={'/'}>
              <CardHeader>
                <CardTitle>{board.title}</CardTitle>
                <CardDescription>Description example</CardDescription>
              </CardHeader>
          </Link>
            </Card>
        ))}
      </div>
      <CreateNewBoardButton />
    </div>
  )
}
export default BoardPage