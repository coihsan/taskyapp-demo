import React from 'react'
import PanelBar from '@/app/app/[workspaceid]/_components/panel-bar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {
    searchParams: { workspaceId: string;  }
}
const WorkspaceIDPage = async ({ searchParams } : Props) => {

    return (
        <ScrollArea className="relative pb-32 h-screen w-full p-4">
            <PanelBar />
            <h1>Workspace ID : {searchParams.workspaceId}</h1>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}
export default WorkspaceIDPage
