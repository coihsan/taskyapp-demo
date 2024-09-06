"use client"

import { useUserDetails } from "@/lib/hooks/use-swr"
import Unauthorized from "@/components/unauthorized"
import { redirect } from "next/navigation"

type Props ={
  params: {workspaceid: string}
}

const Page = ({ params } : Props) => {
    const { user } = useUserDetails()

    if(user){
      redirect(`/app/${params.workspaceid}`)
    } else {
      <Unauthorized />
    }
}
export default Page