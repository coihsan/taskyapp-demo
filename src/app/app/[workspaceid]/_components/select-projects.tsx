"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateNewProjectButton from "./create-projects-btn";
import Link from "next/link";
import { FluentFolder24Regular } from "@/components/icons/folder-24-regular";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useGetAllProjectsByWorkspaceId } from "@/lib/hooks/use-swr";
import Loading from "@/components/global/loading";
import clsx from "clsx";

const SelectProjects = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const router = useRouter();
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

  const handleProjectChange = (projectid: string) => {
    setSelectedProject(projectid);
    router.replace(`/app/${params.workspaceid}/projects/${projectid}`);
  };

  return (
    <div>
      <Select value={selectedProject} onValueChange={handleProjectChange}>
        <SelectTrigger className="w-[180px] ButtonStyle">
          <SelectValue placeholder="Project" />
        </SelectTrigger>
        <SelectContent>
          {spaceByWorkspaceId.length === 0 ? (
            <div className="text-muted-foreground text-center text-xs py-4 italic">
                No Workspace
            </div>
          ) : (
            spaceByWorkspaceId.map((project) => (
              <SelectItem value={project.id}>{project.name}</SelectItem>
            ))
          )}
          <SelectSeparator />
          <CreateNewProjectButton />
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectProjects;
