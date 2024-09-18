import React from "react";
import Sidebar from "@/components/global/sidebar";
import { db } from "@/lib/server/db";

type Props = {
  children: React.ReactNode;
  params: {
    workspaceid: string;
  };
};

const WorkspaceLayout = async ({ children, params }: Props) => {
  console.log("WorkspaceId in MainLayout is :", params.workspaceid);

  const workspaceDetails = await db.workspace.findFirst({
    where: {
      id: params.workspaceid,
    },
  });

  if (!workspaceDetails) {
    return null;
  }

  return (
    <main className="flex overflow-hidden h-screen min-h-[100vh] p-1 w-full">
      <Sidebar workspaceid={workspaceDetails.id} />
      <div className="w-full rounded-2xl bg-onyx-100 dark:bg-onyx-900 border borderStyle">
        {children}
      </div>
    </main>
  );
};

export default WorkspaceLayout;
