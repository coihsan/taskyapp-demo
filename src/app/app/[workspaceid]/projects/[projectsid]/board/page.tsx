import CreateNewBoardForm from '@/components/form/create-new-board-form';
import { db } from '@/lib/server/db';
import React from 'react';

type Props = {
  params: {
    boardid: string
  }
}
const BoardPage = async ({ params } : Props) =>{
  return(
    <div>
      <h1 className="text-4xl">Create New Board</h1>
      <CreateNewBoardForm />
    </div>
  )
}
export default BoardPage