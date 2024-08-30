import React from "react";
import Loading from "@/components/global/loading";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      Redirect to dashboard
      <Loading className="w-16 h-16" />
    </div>
  );
};

export default LoadingPage;