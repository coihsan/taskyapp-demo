import React from "react";
import PageWrapper from "@/components/primitive/page-wrapper";
import { MoreHorizontal } from "@/components/icons/more-horizontal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllProjectsByWorkspaceId } from "@/lib/action/projects";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { getAuthUserDetails } from "@/lib/action/user";
import { db } from "@/lib/server/db";
import { FluentShiftsActivity24Regular } from "@/components/icons/shifts-activity-24-regular";

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
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
        <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>Project List</CardTitle>
        <CardDescription>
          Manage your workspace and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        User activity is here
      </CardContent>
    </Card>
        <Card className="bg-transparent">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FluentShiftsActivity24Regular className="size-9 border borderStyle rounded-lg p-2" />
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
