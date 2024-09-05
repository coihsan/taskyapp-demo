"use client"
import React from 'react'
import PageHeader from './[workspaceid]/_components/pageheader/page';
import SidebarMenuAccount from '@/components/global/sidebar-menu-account';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const pathname = usePathname()
  
  return (
    <main className="overflow-hidden h-screen min-h-[100dvh] w-full">
      {pathname.startsWith('/app') && <PageHeader />}
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