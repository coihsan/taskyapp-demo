import React from 'react'
import { db } from '@/lib/db';
import Unauthorized from '@/components/unauthorized'
import { notFound } from 'next/navigation'

type Props = {
  searchParams: { workspaceId: string; projectsId: string }
}

const Page = async ({ searchParams } : Props) => {
  return(
    <div>
      Projects Page
    </div>
  )
  
};

export default Page;
