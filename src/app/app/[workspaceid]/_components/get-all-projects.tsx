"use client";

import CreateNewProjectButton from "./create-projects-btn";
import { SidebarContent } from "@/components/global/sidebar-content";
import Link from "next/link";
import { FluentFolder24Regular } from "@/components/icons/folder-24-regular";
import { useParams, usePathname } from "next/navigation";
import { useGetAllProjectsByWorkspaceId } from "@/lib/hooks/use-swr";
import Loading from "@/components/global/loading";
import clsx from "clsx";

const GetAllProjects = () => {
  const params = useParams<{ workspaceid: string }>();
  const pathname = usePathname();
  const { spaceByWorkspaceId, isLoading, isError } =
    useGetAllProjectsByWorkspaceId(params.workspaceid);
  if (!spaceByWorkspaceId) return null;

  if (isLoading) {
    return <Loading />;
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
        <CreateNewProjectButton />
      </div>
      <div className="mt-4 h-60">
        {spaceByWorkspaceId.map((list) => (
          <div className="grid w-full" key={list.id}>
            <Link
              href={`/app/${params.workspaceid}/projects/${list.id}`}
              className={clsx(
                "flex items-center text-sm h-9 gap-3 pl-3 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
                {
                  "bg-muted rounded-lg font-bold":
                    pathname ===
                    `/app/${params.workspaceid}/projects/${list.id}`,
                }
              )}
            >
              <div className="flex items-center gap-4">
                <FluentFolder24Regular className="size-5" />
                <span className="overflow-hidden text-clip-1 text-nowrap">
                  {list.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SidebarContent>
  );
};

export default GetAllProjects;
