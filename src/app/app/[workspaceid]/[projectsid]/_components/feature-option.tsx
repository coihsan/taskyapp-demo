"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import clsx from "clsx"
import { BoardIcons } from "@/components/icons/board-split";
import WorkspaceIcons from "@/components/icons/workspace";
import { FluentNotepad24Regular } from "@/components/icons/notepad-24-regular";
import { FluentDataFunnel24Regular } from "@/components/icons/data-funnel-24-regular";
import { FluentTaskListSquareRtl24Regular } from "@/components/icons/task-list-square-rtl-24-regular";
import { FluentImage24Regular } from "@/components/icons/image-24-regular";
import { projectsMenu } from "@/lib/const"

const FeatureOption = () => {
    const params = useParams<{workspaceid: string, projectsid: string}>()
    const pathname = usePathname()
    const router = useRouter()

    return(
        <nav className="flex items-center space-x-2 border-y-[1px] borderStyle py-2 mt-3">
            {projectsMenu.map((menu) =>(
                <Link key={menu.id} className={clsx('flex px-3 py-1.5 rounded-md whitespace-nowrap text-sm fonr-normal', {"bg-muted font-bold" : pathname === `/app/${params.workspaceid}/${params.projectsid}/${menu.url}`})} href={`/app/${params.workspaceid}/${params.projectsid}/${menu.url}`}>{menu.title}</Link>
            ))}
        </nav>
    )
}
export default FeatureOption