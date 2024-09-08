"use client";
import React from "react";
import { SidebarContent } from "@/components/global/sidebar-content";
import { useParams, usePathname } from "next/navigation";
import CalenderDate from "@/components/icons/calender-date";
import FluentPeopleTeam24Regular from "@/components/icons/people-team";
import { FluentSettings24Regular } from "@/components/icons/settings";
import Link from "next/link";
import clsx from "clsx";
import WorkspaceIcons from "../icons/workspace";

export const sidebar = [
  { id: 1, title: "View", url: `/view`, icon: WorkspaceIcons },
  {
    id: 2,
    title: "Upcoming",
    url: "/schedule",
    icon: CalenderDate,
  },
  {
    id: 7,
    title: "Teams",
    url: "/members",
    icon: FluentPeopleTeam24Regular,
  },
  {
    id: 3,
    title: "Settings",
    url: "/settings",
    icon: FluentSettings24Regular,
  },
];

const WorkspaceMenu = () => {
  const pathname = usePathname();
  const params = useParams<{ workspaceid: string }>();
  return (
    <SidebarContent>
      <span className="text-[11px] text-muted-foreground font-medium uppercase">
        Workspace
      </span>
      <nav className="flex flex-col gap-1 pt-4">
        {sidebar.map((item) => (
          <Link
            className={clsx(
              "flex items-center text-sm h-9 gap-3 pl-3 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
              {
                "bg-muted rounded-lg font-bold": pathname === `/app/${params.workspaceid}${item.url}`,
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
              <item.icon />
            </div>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </SidebarContent>
  );
};

export default WorkspaceMenu;
