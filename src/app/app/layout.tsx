"use client"
import React from 'react'
import StoreProvider from '@/providers/store-provider';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  
  return (
    <StoreProvider>
      <main className="overflow-hidden h-screen min-h-[100dvh] w-full">
        {children}
      </main>
    </StoreProvider>
  );
};

export default MainLayout;