"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { projectsMenu } from "@/lib/const";
import { NotepadPerson24Regular } from "@fluentui/react-icons";

const FeatureOption = () => {
  const params = useParams<{ workspaceid: string; projectsid: string }>();
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-2 border-y-[1px] h-12 borderStyle px-4">
      <Link
        className={clsx(
          "flex px-3 gap-2 py-1.5  h-12 items-center justify-center whitespace-nowrap text-sm text-muted-foreground",
          {
            "text-lime-600 dark:text-lime-400 border-lime-600 dark:border-lime-400 border-b-2 font-bold":
              pathname === `/app/${params.workspaceid}/${params.projectsid}`
          }
        )}
        href={`/app/${params.workspaceid}/${params.projectsid}`}
      >
        <NotepadPerson24Regular className="size-[22px]" />
        <span>Summary</span>
      </Link>
      {projectsMenu.map((menu) => (
        <Link
          key={menu.id}
          className={clsx(
            "flex px-3 gap-2 py-1.5  h-12 items-center justify-center whitespace-nowrap text-sm text-muted-foreground",
            {
              "text-lime-600 dark:text-lime-400 border-lime-600 dark:border-lime-400 border-b-2 font-bold":
                pathname ===
                `/app/${params.workspaceid}/${params.projectsid}/${menu.url}`,
            }
          )}
          href={`/app/${params.workspaceid}/${params.projectsid}/${menu.url}`}
        >
          <menu.icon className="size-[22px]" />
          <span>{menu.title}</span>
        </Link>
      ))}
    </nav>
  );
};
export default FeatureOption;
