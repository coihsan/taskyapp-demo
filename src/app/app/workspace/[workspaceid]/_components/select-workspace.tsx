"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import Loading from "@/components/global/loading";
import { shortText } from "@/lib/utils";
import { useUserDetails } from "@/lib/hooks/use-swr";
import { useRouter } from "next/navigation";
import CreateWorkspaceButton from "./create-workspace-btn";

const SelectWorkspace = () => {
  const router = useRouter();
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const { user, isLoading, isError } = useUserDetails();

  useEffect(() => {
    const storedWorkspaceId = localStorage.getItem("workspaceId");

    if (storedWorkspaceId) {
      setSelectedWorkspace(storedWorkspaceId);
    }
  }, []);

  if (isLoading) {
    return <Loading className="flex justify-center w-full" />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  const handleWorkspaceChange = (workspaceid: string) => {
    setSelectedWorkspace(workspaceid);
    localStorage.setItem("workspaceId", workspaceid);
    router.replace(`/app/workspace/${workspaceid}`);
  };

  return (
    <>
      {user?.user_workspace && (
        <Select value={selectedWorkspace} onValueChange={handleWorkspaceChange}>
          <SelectTrigger className="w-[180px] ButtonStyle">
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
              <CreateWorkspaceButton />
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
};
export default SelectWorkspace;
