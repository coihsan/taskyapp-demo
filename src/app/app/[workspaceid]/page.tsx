import React from 'react'
import PanelBar from '@/components/global/panel-bar'
import PageWrapper from '@/components/global/page-wrapper'

type Props = {
    params: { workspaceid: string;  }
}
const WorkspaceIDPage = async ({ params } : Props) => {

    return (
        <PageWrapper className="relative pb-32 h-screen w-full">
            <PanelBar />
            <h1>Workspace ID : {params.workspaceid}</h1>
            <p>This is for list of all projects</p>
        </PageWrapper>
    )
}
export default WorkspaceIDPage
