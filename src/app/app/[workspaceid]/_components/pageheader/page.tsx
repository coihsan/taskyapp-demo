import React from 'react'
import UserButtonCustom from '@/components/auth/user-button'
import Logo from '@/components/global/logo'
import SelectProjects from '../select-projects'
import SelectWorkspace from '../select-workspace'
import NotificationUser from '@/components/global/notification-user'
import Link from 'next/link'

const PageHeader = () => {
    return(
        <div className="flex items-center justify-between w-full py-3 px-2 border-b-[1px] border-black/20 dark:border-white/15">
            <div className='flex items-center gap-4'>
                <Link href={'/app'}><Logo /></Link>
                <SelectWorkspace />
                <SelectProjects />
            </div>
            <div className='flex items-center gap-4'>
                <NotificationUser />
                <UserButtonCustom />
            </div>
        </div>
    )
}
export default PageHeader