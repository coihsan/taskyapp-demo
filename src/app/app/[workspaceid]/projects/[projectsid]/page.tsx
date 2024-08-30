"use client"
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params  = useParams<{workspaceId: string, projectsId: string}>()
  console.log('params is', params)
  return (
    <main className="p-4">
      <h1>Projects ID Page {params.workspaceId}</h1>
    </main>
  );
};
export default Page