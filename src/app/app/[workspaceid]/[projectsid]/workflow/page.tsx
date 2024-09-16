import React from "react";
import dynamic from "next/dynamic";

const Workflow = dynamic(() => import("@/app/app/[workspaceid]/[projectsid]/workflow/_components/workflow"), {
  ssr: false,
})
// TODO: This is error 
const Page = () => {
  return (
    <section className="p-4">
      {/* <Workflow /> */}
    </section>
  );
};

export default Page;
