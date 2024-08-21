import React from "react";
type Props = {
  params: {
    projectsId: string;
    workspaceId: string;
  };
};

const Page = ({ params } : Props) => {
  return (
    <main className="p-4">
      <h1>Projects ID Page {params.projectsId}</h1>
    </main>
  );
};
export default Page