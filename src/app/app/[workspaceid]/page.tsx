import React from "react";
import PageWrapper from "@/components/primitive/page-wrapper";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthUserDetails } from "@/lib/action/user";
import { db } from "@/lib/server/db";
import {ShiftsActivity24Regular, NotepadPerson24Regular, TasksApp24Regular} from "@fluentui/react-icons"

type Props = {
    params:{
      workspaceid: string,
      projectsid: string
    }
  }
const WorkspaceIDPage = async ({ params }: Props) => {
  const user = await getAuthUserDetails()
  const data = await db.workspace.findUnique({
    where: {
      id: params.workspaceid,
    },
  });

  return (
    <PageWrapper className="relative h-screen w-full">
      <div className="p-4">
        <div className="pb-6">
          <h1 className="titleHeader">{data?.name}</h1>
          <p className="text-sm">Workspace ID : {params.workspaceid} </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
        <Card className="">
      <CardHeader>
        <div className="flex items-center gap-3">
          <NotepadPerson24Regular className="size-10 border borderStyle rounded-lg p-2" />
          <CardTitle>Task</CardTitle>
        </div>
        <CardDescription>
          Manage your workspace and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        User activity is here
      </CardContent>
    </Card>
        <Card className="">
      <CardHeader>
        <div className="flex items-center gap-3">
          <TasksApp24Regular className="size-10 border borderStyle rounded-lg p-2" />
          <CardTitle>Project List</CardTitle>
        </div>
        <CardDescription>
          Manage your workspace and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        User activity is here
      </CardContent>
    </Card>
        <Card className="">
      <CardHeader>
        <div className="flex items-center gap-3">
          <ShiftsActivity24Regular className="size-10 border borderStyle rounded-lg p-2" />
          <CardTitle>Activity</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        User activity is here
      </CardContent>
    </Card>
        </div>
      </div>
    </PageWrapper>
  );
};
export default WorkspaceIDPage;
