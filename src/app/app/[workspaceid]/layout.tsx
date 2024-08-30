import Sidebar from "@/app/app/[workspaceid]/_components/sidebar";
import HeaderBar from "@/app/app/[workspaceid]/_components/headerbar";
import { db } from "@/lib/server/db";

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
    <main className="flex overflow-hidden h-screen min-h-[100dvh] p-1 fixed w-full">
      <Sidebar workspaceId={workspaceDetails.id} />
      <aside className="w-full CardStyle rounded-2xl">
        <HeaderBar />
          {children}
      </aside>
    </main>
  );
};

export default MainLayout;
