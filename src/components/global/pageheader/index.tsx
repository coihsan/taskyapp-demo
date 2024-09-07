import React from 'react'
import NotificationUser from '../notification-user'
import BreadcrumbSegment from '../breadcrumb-segment'
import TBreadcrumbs from '../TBreacrumbs'
import WorkspaceSettings from '../workspace-settings'

const PageHeader = () =>{
    return(
        <div className='flex justify-between items-center border-b-[1px] borderStyle p-3'>
            <TBreadcrumbs />
            <div className='flex items-center gap-3'>
                <NotificationUser />
                <WorkspaceSettings />
            </div>
        </div>
    )
}
export default PageHeader