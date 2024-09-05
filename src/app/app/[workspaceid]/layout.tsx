import React from 'react'
import Sidebar from "@/app/app/[workspaceid]/_components/sidebar";
import HeaderBar from "@/app/app/[workspaceid]/_components/headerbar";
import { db } from "@/lib/server/db";
import PageHeader from './_components/pageheader/page';

type Props = {
  children: React.ReactNode;
  params: {
    workspaceid: string;
  };
};

const MainLayout = async ({ children, params }: Props) => {
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
    <main className="overflow-hidden h-screen min-h-[100vh] w-full">
      <aside className="flex w-full">
      <Sidebar workspaceId={workspaceDetails.id} />
          <div className="p-4 w-full border-x-[1px] CardStyle">
            {children}
          </div>
      </aside>
    </main>
  );
};

export default MainLayout;
