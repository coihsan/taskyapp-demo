"use client"
import { useGetProjectDetails } from "@/lib/hooks/use-swr";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "./loading";

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
    <div className="flex items-center">
      <Image
        className="rounded-md"
        src={"/avatar/avatar2.png"}
        width={36}
        height={36}
        alt={"avatar"}
      />
      <div className="ml-3">
        <h1 className="text-sm font-semibold">{data?.name}</h1>
        <p className="text-xs text-muted-foreground line-clamp-1">
          This is the organization profile page
        </p>
      </div>
    </div>
  );
};
export default ProjectProfile;
