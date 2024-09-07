import Unauthorized from "@/components/unauthorized"
import { redirect } from "next/navigation"
import { getAuthUserDetails } from "@/lib/action/user"
import { db } from "@/lib/server/db"
import dynamic from 'next/dynamic' 

type Props ={
  searchParams: {workspaceId: string}
}

const OnboardingPage = dynamic(() => import('@/components/onboaring'), {
  ssr: false,
})

const Page = async ({ searchParams } : Props) => {
    const user = await getAuthUserDetails()

    const data = await db.workspace.findFirst({
      where:{
        id: searchParams.workspaceId
      },
      include:{
        user_workspace: true
      }
    })

    if(user){
      if(data){
        return redirect(`/app/${searchParams.workspaceId}`)
      } else if(!data){
        return <OnboardingPage />
      }
    } else {
      return redirect('/sign-in')
    }
  }
export default Page