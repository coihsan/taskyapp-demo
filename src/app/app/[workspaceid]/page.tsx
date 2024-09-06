import React from 'react'
import PanelBar from '@/components/global/panel-bar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {
    params: { workspaceid: string;  }
}
const WorkspaceIDPage = async ({ params } : Props) => {

    return (
        <ScrollArea className="relative pb-32 h-screen w-full">
            <PanelBar />
            <h1>Workspace ID : {params.workspaceid}</h1>
            <p>This is for list of all projects</p>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}
export default WorkspaceIDPage
