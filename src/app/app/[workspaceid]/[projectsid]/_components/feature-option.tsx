"use client"

import { FeatureOptionsType } from "@/lib/types/db.types"
import { useParams, useRouter } from "next/navigation"
import React, { useState, useEffect} from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import WorkspaceIcons from "@/components/icons/workspace"

const FeatureOption = () => {
    const [addFeature, setAddFeature] = useState<FeatureOptionsType[]>()
    const [featureOptions, setFeatureOptions] = useState<FeatureOptionsType[]>()
    const [selectedFeature, setSelectedFeature] = useState<FeatureOptionsType[]>()
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
                        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                    <div className="w-full flex flex-col items-center p-2 rounded-md border borderStyle w-max">
                        <WorkspaceIcons className="size-8" />
                        <span>Board</span>
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    )
}
export default FeatureOption