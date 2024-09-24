"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { projectsMenu } from "@/lib/const";
import { NotepadPerson24Regular } from "@fluentui/react-icons";

const FeatureOption = () => {
  const params = useParams<{ workspaceid: string; projectsid: string; notesid: string }>();
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 border-y-[1px] h-12 borderStyle px-4">
      <Link
        className={clsx(
          "flex gap-2 py-1.5 h-12 items-center justify-center whitespace-nowrap text-sm",
          {
            "border-black dark:border-white border-b-2 font-bold":
              pathname === `/app/${params.workspaceid}/${params.projectsid}`
          }
        )}
        href={`/app/${params.workspaceid}/${params.projectsid}`}
      >
        <NotepadPerson24Regular className="size-[22px]" />
        <span>Summary</span>
      </Link>
      <div className="flex items-center gap-4">
      {projectsMenu.map((menu) => (
        <Link
          key={menu.id}
          className={clsx(
            "flex gap-2 py-1.5  h-12 items-center justify-center whitespace-nowrap text-sm",
            {
              "border-black dark:border-white border-b-2 font-bold":
                pathname ===
                `/app/${params.workspaceid}/${params.projectsid}/${menu.url}` ||
                pathname ===
                `/app/${params.workspaceid}/${params.projectsid}/${menu.url}/${params.notesid}`,
            }
          )}
          href={`/app/${params.workspaceid}/${params.projectsid}/${menu.url}`}
        >
          <menu.icon className="size-[22px]" />
          <span>{menu.title}</span>
        </Link>
      ))}
      </div>
    </nav>
  );
};
export default FeatureOption;
