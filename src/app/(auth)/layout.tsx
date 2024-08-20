import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-40 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_70%,#000_90%)]" />
      <div className="absolute inset-0 h-full w-full items-center -z-50 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#161618_100%)]" />
      {children}
    </div>
  );
};

export default AuthLayout;
