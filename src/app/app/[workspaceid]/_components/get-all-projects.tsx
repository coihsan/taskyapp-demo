"use client"

import CreateNewProjectButton from "./create-projects-btn";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SidebarContent } from "@/components/global/sidebar-content";
import EditWorkspace from "@/app/app/[workspaceid]/_components/edit-workspace";
import Link from "next/link";
import { FluentFolder24Regular } from "@/components/icons/folder-24-regular";
import { useParams } from "next/navigation";
import { useGetAllProjectsByWorkspaceId } from "@/lib/hooks/use-swr";
import Loading from "@/components/global/loading";

const GetAllProjects = () => {
    const params = useParams<{workspaceid: string}>()
    const { spaceByWorkspaceId, isLoading, isError } = useGetAllProjectsByWorkspaceId(params.workspaceid)
    if (!spaceByWorkspaceId) return null;

    if (isLoading) {
        return <Loading className="flex justify-center w-full" />
    }
    if (isError) {
        return <div>Error: {isError.message}</div>
    }

  return (
    <SidebarContent>
      <div className="flex items-center justify-between h-full">
        <span className="text-[11px] text-muted-foreground font-medium uppercase">
          project
        </span>
        <CreateNewProjectButton />
      </div>
      <Command className="mt-4 h-60">
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
  );
};

export default GetAllProjects;
