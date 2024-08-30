"use client"

import React from 'react'
import Logo from '@/components/global/logo'
import FooterOnSidebar from '@/components/global/footer-on-sidebar'
import SelectWorkspace from '../select-workspace'
import WorkspaceMenu from '../workspace-menu'
import { SidebarContent } from "@/components/global/sidebar-content";
import { useGetAllProjectsByWorkspaceId } from '@/lib/hooks/use-swr'
import GetAllProjects from '../get-all-projects'


interface Props {
    workspaceId: string
}

const Sidebar = ({ workspaceId } : Props) => {

    return (
        <aside className="w-full h-full h-screen max-w-64 relative">
            <SidebarContent borderBottom>
                <Logo />
            </SidebarContent>
            <SelectWorkspace />
            <WorkspaceMenu />
            <GetAllProjects />
            <SidebarContent className="absolute left-4 bottom-4" borderTop>
                <FooterOnSidebar />
            </SidebarContent>
        </aside>
    )
}

export default Sidebar
