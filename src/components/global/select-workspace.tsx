"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { useUserDetails } from "@/lib/hooks/use-swr";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import CreateButtonGlobal from "../primitive/create-button-global";
import NewWorkspaceForm from "../form/new-workspace-form";

const SelectWorkspace = () => {
  const router = useRouter();
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const { user, isLoading, isError } = useUserDetails();

  useEffect(() => {
    const storedWorkspaceId = localStorage.getItem("workspaceid");
    if (storedWorkspaceId) {
      setSelectedWorkspace(storedWorkspaceId);
    }
  }, []);

  if (isLoading) {
    return <Skeleton className="w-full h-12" />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }


  const handleWorkspaceChange = (workspaceid: string) => {
    setSelectedWorkspace(workspaceid);
    localStorage.setItem("workspaceid", workspaceid);
    router.replace(`/app/${workspaceid}`);
  };

  return (
    <>
      {user?.user_workspace && (
        <Select value={selectedWorkspace} onValueChange={handleWorkspaceChange}>
          <SelectTrigger className="w-full h-12 bg-muted dark:bg-onyx-900 rounded-xl border borderStyle">
            <SelectValue placeholder="Select a workspace" />
          </SelectTrigger>
          <SelectContent className="CardStyle">
            <SelectGroup>
              <SelectLabel className="text-xs text-muted-foreground">Your own</SelectLabel>
              {user.user_workspace.length === 0 ? (
                <div className="text-muted-foreground text-center text-xs py-4 italic">
                  No Workspace
                </div>
              ) : (
                user.user_workspace.map((list) => (
                  <SelectItem
                    className="py-2"
                    key={list.workspace.id}
                    value={`${list.workspace.id}`}
                  >
                    {list.workspace.name}
                  </SelectItem>
                ))
              )}
              <SelectSeparator />
              <CreateButtonGlobal
              className="w-full flex items-center justify-center gap-2"
              title="Create New Workspace"
              subheading="Create New Workspace"
              useIcon
              buttonName="New Workspace"
              size="default"
              variant="default"
              ><NewWorkspaceForm /></CreateButtonGlobal>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
};
export default SelectWorkspace;
