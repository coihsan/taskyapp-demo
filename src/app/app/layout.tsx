import React from 'react'

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
