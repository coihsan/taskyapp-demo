import React from 'react'
import PageHeader from './workspace/[workspaceid]/_components/pageheader/page';
import SidebarMenuAccount from '@/components/global/sidebar-menu-account';

type Props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: Props) => {
  
  return (
    <main className="overflow-hidden h-screen min-h-[100dvh] w-full">
      <PageHeader />
      <div className='flex'>
        <SidebarMenuAccount />
        <div className='border-l-[1px] borderStyle w-full p-4'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
