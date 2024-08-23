import { db } from '@/lib/server/db'
import { redirect, notFound } from 'next/navigation'
import { checkUser } from '@/lib/action/user'
import Unauthorized from '@/components/unauthorized'
import NewWorkspaceForm from '@/components/form/new-workspace-form'

type Props = {
    searchParams: { workspaceId: string;  }
}
const Page = async ({ searchParams } : Props) => {
    const users = await checkUser()
    
    const data = await db.workspace.findFirst({
        where:{
            id: searchParams.workspaceId
        },
        include:{
            user_workspace: true
        }
    })
    if(data){
        return redirect(`/app/${data.id}`)
    }
    if(!users && !data){
        notFound();
    }

    return (
        <div className="flex justify-center items-center mt-4 h-screen">
            <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
                <h1 className="text-4xl"> Create New Workspace</h1>
                <NewWorkspaceForm />
            </div>
        </div>
    )
}
export default Page
