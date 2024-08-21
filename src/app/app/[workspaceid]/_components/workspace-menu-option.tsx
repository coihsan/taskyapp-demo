'use client'

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import CalenderDate from "@/components/icons/calender-date";
import FluentPeopleTeam24Regular from "@/components/icons/people-team";
import { FluentSettings24Regular } from "@/components/icons/settings";
import WorkspaceIcons from "@/components/icons/workspace";

interface Props {
  workspaceId: any
}
export const sidebar = [
    { id: 1, title: 'View', url: `/view`, icon: WorkspaceIcons },
    {
        id: 2,
        title: 'Upcomming',
        url: '/schedule',
        icon: CalenderDate,
    },
    {
        id: 7,
        title: 'Teams',
        url: '/members',
        icon: FluentPeopleTeam24Regular,
    },
    {
        id: 3,
        title: 'Settings',
        url: '/settings',
        icon: FluentSettings24Regular,
    },
]
// TODO : this component will be delete
const WorkspaceMenuOptions = () => {
  const pathname = usePathname();
  const params = useParams<{ workspaceid: string }>();

  return (
    <nav className="flex flex-col gap-1 pt-4">
      {sidebar.map((item) => (
        <Link
          className={clsx(
            "flex items-center text-sm h-9 gap-3 pl-3 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
            {
              "bg-muted rounded-lg font-bold": pathname === item.url,
            }
          )}
          href={`/app/${params.workspaceid}${item.url}`}
          key={item.id}
        >
          <div
            className={clsx("text-black dark:text-foreground", {
              "bg-white": pathname === `/app/${params.workspaceid}${item.url}`,
            })}
          >
            <item.icon />
          </div>
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
};
export default WorkspaceMenuOptions;
