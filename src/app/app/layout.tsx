import Sidebar from "@/app/app/[workspaceid]/_components/sidebar";
import HeaderBar from "@/app/app/[workspaceid]/_components/headerbar";
import { db } from "@/lib/server/db";

type Props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: Props) => {
  
  return (
    <main className="flex justify-center overflow-hidden h-screen min-h-[100dvh] w-full">
      {children}
    </main>
  );
};

export default MainLayout;
