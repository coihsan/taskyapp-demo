"use client"

import { useGetProjectDetails } from "@/lib/hooks/use-swr";
import { useParams } from "next/navigation";
import CreateButtonGlobal from "@/components/primitive/create-button-global";
import SendInvitation from "@/components/form/send-invitation";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectProfile = () => {
  const params = useParams<{workspaceid: string, projectsid: string}>()
  const { data, isLoading, isError } = useGetProjectDetails(params.projectsid)
  if (isLoading) {
    return <Skeleton className="h-16 w-full" />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  return (
    <div className="flex items-center justify-between p-4">
        <h1 className="titleHeader">{data?.name}</h1>
        <CreateButtonGlobal className="w-max gap-3" 
        title="Invitation" 
        subheading="An invitation will be sent to the user. Users who already have an
        invitation sent out to their email, will not receive another
        invitation." 
        useIcon 
        buttonName="Invite" 
        variant="ghost">
          <SendInvitation workspaceid={params.workspaceid} />
        </CreateButtonGlobal>
    </div>
  );
};
export default ProjectProfile;
