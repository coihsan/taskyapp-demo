import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full flex items-center justify-center h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#113e_100%)]"></div>
      {children}
    </div>
  );
};

export default AuthLayout;
