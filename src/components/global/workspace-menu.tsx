"use client";
import React from "react";
import { SidebarContent } from "@/components/global/sidebar-content";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { sidebar } from "@/lib/const";
import { Home24Regular } from "@fluentui/react-icons";

const WorkspaceMenu = () => {
  const pathname = usePathname();
  const params = useParams<{ workspaceid: string }>();

  return (
    <SidebarContent>
      <span className="text-[11px] text-muted-foreground font-medium uppercase">
        Workspace
      </span>
      <nav className="flex flex-col gap-1 pt-4">
        <Link
          className={clsx(
            "flex items-center text-sm text-foreground h-9 gap-3 pl-3 hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
            {
              "bg-muted rounded-lg font-bold text-primary":
                pathname === `/app/${params.workspaceid}`,
            }
          )}
          href={`/app/${params.workspaceid}/${params.workspaceid}`}
        >
          <div
            className={clsx("text-black dark:text-foreground", {
              "bg-muted": pathname === `/app/${params.workspaceid}`,
            })}
          >
            <Home24Regular className="size-[22px]" />
          </div>
          <span>Home</span>
        </Link>
        {sidebar.map((item) => (
          <Link
            className={clsx(
              "flex items-center text-sm text-foreground h-9 gap-3 pl-3 hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
              {
                "bg-muted rounded-lg font-bold text-primary":
                  pathname === `/app/${params.workspaceid}${item.url}`,
              }
            )}
            href={`/app/${params.workspaceid}${item.url}`}
            key={item.id}
          >
            <div
              className={clsx("text-black dark:text-foreground", {
                "bg-muted":
                  pathname === `/app/${params.workspaceid}${item.url}`,
              })}
            >
              <item.icon className="size-[22px]" />
            </div>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </SidebarContent>
  );
};

export default WorkspaceMenu;
