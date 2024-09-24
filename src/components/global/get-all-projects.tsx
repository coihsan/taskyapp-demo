"use client";

import React from 'react'
import { SidebarContent } from "@/components/global/sidebar-content";
import Link from "next/link";
import { Folder24Regular } from "@fluentui/react-icons";
import { useParams, usePathname } from "next/navigation";
import { useGetAllProjectsByWorkspaceId } from "@/lib/hooks/use-swr";
import clsx from "clsx";
import { Skeleton } from "../ui/skeleton";
import CreateButtonGlobal from "../primitive/create-button-global";
import NewProjectsForm from "../form/new-projects-form";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const GetAllProjects = () => {
  const params = useParams<{ workspaceid: string, projectsid: string, notesid: string }>();
  const pathname = usePathname();
  const { spaceByWorkspaceId, isLoading, isError } = useGetAllProjectsByWorkspaceId(params.workspaceid);

  if (!spaceByWorkspaceId) return null;

  if (isLoading) {
    return <Skeleton className="w-64 h-9" />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }


  return (
    <SidebarContent borderTop>
      <div className="flex items-center justify-between h-full">
        <span className="text-[11px] text-muted-foreground font-medium uppercase">
          project
        </span>
        <CreateButtonGlobal
        title="Create Project" 
        subheading="Deploy your new project in one-click."
        variant="ghost"
        size="icon"
        useIcon
        >
          <NewProjectsForm />
        </CreateButtonGlobal>
      </div>
      <ScrollArea className="h-56">
        <div className="grid gap-1 mt-2">
        {spaceByWorkspaceId.map((list) => (
          <div className="grid w-full w-64" key={list.id}>
            <Link
              href={`/app/${params.workspaceid}/${list.id}`}
              className={clsx(
                "flex items-center text-sm gap-3 h-8 pl-3 hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll line-clamp-1",
                {
                  "bg-muted rounded-lg font-bold text-primary":
                    pathname ===
                    `/app/${params.workspaceid}/${list.id}` || 
                    pathname === `/app/${params.workspaceid}/${list.id}/board` ||
                    pathname === `/app/${params.workspaceid}/${list.id}/workflow` ||
                    pathname === `/app/${params.workspaceid}/${list.id}/calender` ||
                    pathname === `/app/${params.workspaceid}/${list.id}/notes` ||
                    pathname === `/app/${params.workspaceid}/${list.id}/notes/${params.notesid}` ||
                    pathname === `/app/${params.workspaceid}/${list.id}/calender`
                }
              )}
            >
              <div className="flex items-center gap-4">
                <Folder24Regular className="size-[22px]" />
                <span className="overflow-hidden text-clip-1 text-nowrap">
                  {list.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </SidebarContent>
  );
};

export default GetAllProjects;
