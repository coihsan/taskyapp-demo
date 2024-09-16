"use client"

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params  = useParams<{workspaceid: string, projectsid: string}>()
  
  return (
    <main className="p-4">
      <h1>Projects ID Page {params.projectsid}</h1>
    </main>
  );
};
export default Page