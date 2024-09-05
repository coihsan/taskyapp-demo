import React from 'react'
import PanelBar from '@/app/app/workspace/[workspaceid]/_components/panel-bar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {
    params: { workspaceid: string;  }
}
const WorkspaceIDPage = async ({ params } : Props) => {

    return (
        <ScrollArea className="relative pb-32 h-screen w-full">
            <PanelBar />
            <h1>Workspace ID : {params.workspaceid}</h1>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}
export default WorkspaceIDPage
