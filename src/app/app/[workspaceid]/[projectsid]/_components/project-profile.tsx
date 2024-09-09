"use client"

import { useGetProjectDetails } from "@/lib/hooks/use-swr";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "../../../../../components/global/loading";

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
    <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">{data?.name}</h1>
    </div>
  );
};
export default ProjectProfile;
