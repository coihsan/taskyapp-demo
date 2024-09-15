"use client"

import { FeatureOptionsType } from "@/lib/types/db.types"
import { useParams, useRouter } from "next/navigation"
import React, { useState, useEffect, useOptimistic } from "react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BoardIcons } from "@/components/icons/board-split"
import CreateFeatureForm from "@/components/form/create-feature-form"

const FeatureOption = () => {
    const params = useParams<{workspaceid: string, projectsid: string}>()
    const router = useRouter()

    const handleClick = () => {
        router.push(`/app/${params.workspaceid}/${params.projectsid}/board`)
    }

    return(
        <nav className="flex items-center space-x-2 border-y-[1px] borderStyle py-2 mt-3">
            <Button onClick={handleClick} variant={'ghost'}>Board</Button>
            <Popover>
                <PopoverTrigger>Add</PopoverTrigger>
                <PopoverContent>
                    <div className="space-y-2 pb-4">
                        <h4 className="font-medium leading-none">Add Features</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <CreateFeatureForm name={"Board"} icon={<BoardIcons className="size-9" />} workspaceid={params.workspaceid} projectsid={params.projectsid} />
                        <CreateFeatureForm name={"Workflow"} icon={<BoardIcons className="size-9" />} workspaceid={params.workspaceid} projectsid={params.projectsid} />
                        <CreateFeatureForm name={"Notes"} icon={<BoardIcons className="size-9" />} workspaceid={params.workspaceid} projectsid={params.projectsid} />
                        <CreateFeatureForm name={"Funnel"} icon={<BoardIcons className="size-9" />} workspaceid={params.workspaceid} projectsid={params.projectsid} />
                        <CreateFeatureForm name={"Todos"} icon={<BoardIcons className="size-9" />} workspaceid={params.workspaceid} projectsid={params.projectsid} />
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    )
}
export default FeatureOption