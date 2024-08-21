"use client"

import React from 'react'
import Logo from '@/components/global/logo'
import FooterOnSidebar from '@/components/global/footer-on-sidebar'
import SelectWorkspace from '../select-workspace'
import WorkspaceMenu from '../workspace-menu'
import EditWorkspace from "@/app/app/[workspaceid]/_components/edit-workspace";
import Link from "next/link";
import { SidebarContent } from "@/components/global/sidebar-content";
import { FluentFolder24Regular } from "@/components/icons/folder-24-regular";
import { useGetAllProjectsByWorkspaceId } from '@/lib/use-swr'
import CreateNewProjectButton from '../create-projects-btn'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

interface Props {
    workspaceId: string
}

const Sidebar = ({ workspaceId } : Props) => {
    const { spaceByWorkspaceId } = useGetAllProjectsByWorkspaceId(workspaceId)
    if (!spaceByWorkspaceId) return;


    return (
        <aside className="w-full h-full h-screen max-w-64 relative">
            <SidebarContent borderBottom>
                <Logo />
            </SidebarContent>
            <SelectWorkspace />
            <WorkspaceMenu />
            <SidebarContent>
                <div className="flex items-center justify-between h-full">
                    <span className="text-[11px] text-muted-foreground font-medium uppercase">
                        project
                    </span>
                    <CreateNewProjectButton workspaceId={workspaceId} />
                </div>
                <Command className='mt-4 h-60'>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                        <CommandEmpty>No project found.</CommandEmpty>
                        {spaceByWorkspaceId.map((list) => (
                            <CommandItem className="grid w-full" key={list.id}>
                                <Link
                                    href={`/app/${list.id}/projects/${list.id}`}
                                    className="text-sm h-6 hover:bg-muted/50 px-2 rounded-md flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <FluentFolder24Regular className="size-5" />
                                        <span className="overflow-hidden text-clip-1 text-nowrap">
                                            {list.name}
                                        </span>
                                    </div>
                                    <EditWorkspace />
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </SidebarContent>
            <SidebarContent className="absolute left-4 bottom-4" borderTop>
                <FooterOnSidebar />
            </SidebarContent>
        </aside>
    )
}

export default Sidebar
