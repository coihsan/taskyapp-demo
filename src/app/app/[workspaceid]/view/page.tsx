"use client"

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
} from "@/components/ui/card"
import SidebarMenuAccount from '@/components/global/sidebar-menu-account';
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
import { useUserDetails } from "@/lib/hooks/use-swr"

type Props = {
  params:{
    workspaceid: string,
    projectsid: string
  }
}

const Page = ({params} : Props) => {
    const { user } = useUserDetails()

  return (
      <div>
        <h1>View</h1>
        <p>WorkspaceID : {params.workspaceid}</p>
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
  )
}
export default Page