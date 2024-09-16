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
        <h1 className="titleHeader">{data?.name}</h1>
        <p>Workspace ID : {params.workspaceid}</p>
        <p>Who is the owner of this workspace? {data?.name}</p>
        <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>Workspace</CardTitle>
        <CardDescription>
          Manage your workspace and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">
                Total Project
              </TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
              Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user?.user_workspace.map((workspace) =>(
                <TableRow key={workspace.workspace.id}>
                <TableCell className="font-medium">
                  {workspace.workspace.name}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{workspace.workspace.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">$499.99</TableCell>
                <TableCell className="hidden md:table-cell">{workspace.workspace.id[0].length}</TableCell>
                <TableCell className="hidden md:table-cell">
                    {workspace.workspace.created_at.toDateString()}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
      </div>
    </PageWrapper>
  );
};
export default WorkspaceIDPage;
