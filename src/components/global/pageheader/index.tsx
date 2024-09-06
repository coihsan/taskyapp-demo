import UserButtonCustom from '@/components/auth/user-button'
import React from 'react'
import NotificationUser from '../notification-user'
import BreadcrumbSegment from '../breadcrumb-segment'
import TBreadcrumbs from '../TBreacrumbs'

const PageHeader = () =>{
    return(
        <div className='flex justify-between items-center border-b-[1px] borderStyle p-3'>
            <TBreadcrumbs />
            <div className='flex items-center gap-3'>
                <NotificationUser />
                <UserButtonCustom />
            </div>
        </div>
    )
}
export default PageHeader