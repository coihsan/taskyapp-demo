import React from 'react'
import Sidebar from "@/app/app/[workspaceid]/_components/sidebar";
import { db } from "@/lib/server/db";

type Props = {
  children: React.ReactNode;
  params: {
    workspaceid: string;
  };
};

const WorkspaceLayout = async ({ children, params }: Props) => {
  console.log('WorkspaceId in MainLayout is :', params.workspaceid)

  const workspaceDetails = await db.workspace.findFirst({
    where: {
      id: params.workspaceid,
    },
  });

  if (!workspaceDetails) {
    return null;
  }
  
  return (
    <main className="flex overflow-hidden h-screen min-h-[100vh] w-full">
      <Sidebar workspaceId={workspaceDetails.id} />
          <div className="p-4 w-full border-x-[1px]">
            {children}
          </div>
    </main>
  );
};

export default WorkspaceLayout;
