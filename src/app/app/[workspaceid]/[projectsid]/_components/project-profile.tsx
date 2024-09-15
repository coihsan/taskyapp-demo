"use client"

import { useGetProjectDetails } from "@/lib/hooks/use-swr";
import { useParams } from "next/navigation";
import Loading from "../../../../../components/global/loading";
import CreateButtonGlobal from "@/components/primitive/create-button-global";
import SendInvitation from "@/components/form/send-invitation";

const ProjectProfile = () => {
  const params = useParams<{workspaceid: string, projectsid: string}>()
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
