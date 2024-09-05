'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import UserButtonCustom from '@/components/auth/user-button'
import HeaderOption from './header-option'
import NotificationUser from '@/components/global/notification-user'
import BreadcrumbSegment from '@/components/global/breadcrumb-segment'
import { Separator } from "@/components/ui/separator";

const HeaderBar = () => {
    const params = useParams<{ workspaceId: string; projectsId: string }>()

    return (
        <header className="flex dark:bg-gradient-to-r dark:from-white/5 space-x-4 items-center w-full h-16 py-2 px-3 relative rounded-t-2xl border-b-[1px] border-black/20 dark:border-white/15">
            <BreadcrumbSegment baseName='Board' />
            <Separator orientation='vertical' />
            <HeaderOption  />
            <div className="flex items-center gap-3 absolute right-4">
                <NotificationUser />
                <UserButtonCustom />
            </div>
        </header>
    )
}
export default HeaderBar
