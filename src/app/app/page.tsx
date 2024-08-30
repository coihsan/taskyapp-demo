import { db } from '@/lib/server/db'
import { redirect, notFound } from 'next/navigation'
import NewWorkspaceForm from '@/components/form/new-workspace-form'
import { checkUser } from '@/lib/action/user'

type Props = {
    params: { workspaceId: string;  }
}
const Page = async ({ params } : Props) => {
    const user = await checkUser()
    const data = await db.userWorkspace.findFirst({
        where:{
            workspaceId: params.workspaceId
        },
        select:{
            workspaceId: true
        }
    })
    if(data){
        redirect(`/app/${data.workspaceId}`)
    }
    if(!data){
        return (
            <div className="flex justify-center items-center mt-4 h-screen">
                <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
                    <h1 className="text-4xl">Create New Workspace</h1>
                    <NewWorkspaceForm />
                </div>
            </div>
        )
    }

}
export default Page
