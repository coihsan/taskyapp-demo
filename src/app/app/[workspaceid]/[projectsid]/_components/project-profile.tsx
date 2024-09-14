"use client"

import { useGetProjectDetails } from "@/lib/hooks/use-swr";
import { useParams } from "next/navigation";
import Loading from "../../../../../components/global/loading";
import CreateButtonGlobal from "@/components/primitive/create-button-global";

const ProjectProfile = () => {
  const params = useParams<{projectsid: string}>()
  const { data, isLoading, isError } = useGetProjectDetails(params.projectsid)
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  return (
    <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{data?.name}</h1>
        <CreateButtonGlobal className="w-max gap-3" title="S" subheading="S" useIcon buttonName="Invite" variant="ghost">
          Add member
        </CreateButtonGlobal>
    </div>
  );
};
export default ProjectProfile;
