"use client"
import React from 'react'

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