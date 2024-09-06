"use client"
import React from 'react'
import PageHeader from '../../components/global/pageheader/page';
import SidebarMenuAccount from '@/components/global/sidebar-menu-account';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  
  return (
    <main className="overflow-hidden h-screen min-h-[100dvh] w-full">
      {children}
    </main>
  );
};

export default MainLayout;