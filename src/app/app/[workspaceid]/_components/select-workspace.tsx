'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectSeparator
} from '@/components/ui/select';
import Loading from '@/components/global/loading';
import { shortText } from '@/lib/utils';
import NewWorkspaceForm from '@/components/form/new-workspace-form';
import { useUserDetails } from '@/lib/use-swr';
import { SidebarContent } from '@/components/global/sidebar-content';
import { useRouter } from "next/navigation";
import CreateWorkspaceButton from './create-workspace-btn';

const SelectWorkspace = () => {
    const router = useRouter()
    const [selectedWorkspace, setSelectedWorkspace] = useState('')
    const { user, isLoading, isError } = useUserDetails()

    useEffect(() =>{
        const storedWorkspaceId = localStorage.getItem('workspaceId')

        if(storedWorkspaceId){
            setSelectedWorkspace(storedWorkspaceId)
        }
    }, [])
    
    if (isLoading) {
        return <Loading className="flex justify-center w-full" />
    }
    if (isError) {
        return <div>Error: {isError.message}</div>
    }

    const handleWorkspaceChange = (workspaceId: string) => {
        setSelectedWorkspace(workspaceId)
        localStorage.setItem('workspaceId', workspaceId)
        router.replace(`/app/${workspaceId}`)
    }

    return (
        <SidebarContent borderBottom>
            <Suspense>
                {user?.user_workspace && (
                    <Select
                        value={selectedWorkspace}
                        onValueChange={handleWorkspaceChange}
                    >
                        <SelectTrigger className="w-full h-[50px] ButtonStyle">
                            <SelectValue placeholder="Select a workspace" />
                        </SelectTrigger>
                        <SelectContent className="CardStyle">
                        <SelectGroup>
                            <SelectLabel className='text-xs'>Your own</SelectLabel>
                            {user.user_workspace.length === 0
                                ? (
                                    <div className="text-muted-foreground text-center text-xs py-4 italic">
                                        No Workspace
                                    </div>
                                ) 
                                : user.user_workspace.map((list) => (
                                    <SelectItem
                                        className="py-2"
                                        key={list.workspace.id}
                                        value={`${list.workspace.id}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Avatar className="w-8 h-8">
                                                <AvatarImage
                                                    sizes="28"
                                                    src={`${list.workspace.workspace_logo}`}
                                                    alt={`${list.workspace.workspace_logo}`}
                                                />
                                                <AvatarFallback className="bg-accent">
                                                    <span>
                                                        {shortText(list.workspace.name)}
                                                    </span>
                                                </AvatarFallback>
                                            </Avatar>
                                            <span>{list.workspace.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            <SelectSeparator />
                                <CreateWorkspaceButton />
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            </Suspense>
        </SidebarContent>
    )
}
export default SelectWorkspace
