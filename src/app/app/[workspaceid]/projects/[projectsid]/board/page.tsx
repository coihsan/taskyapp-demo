import React from "react";
import { db } from "@/lib/server/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import CreateNewBoardButton from "../../../../../../components/global/create-new-board-btn";
type Props = {
  params: {
    workspaceid: string;
    projectsid: string;
    boardid: string;
  };
};
const BoardPage = async ({ params }: Props) => {
  const boardData = await db.board.findMany({
    where: {
      id: params.boardid,
    },
  });
  if (!boardData) return null;

  return (
    <div className="relative h-screen">
      <h1 className="text-xs">Board : {params.projectsid}</h1>
      <div className="grid grid-cols-4 gap-3 mt-4">
        {boardData.map((board) => (
          <Card className="w-full" key={board.id}>
            <Link
              className=""
              href={`/app/${params.workspaceid}/projects/${params.projectsid}/board/${board.id}`}
            >
              <CardHeader>
                <CardTitle>{board.title}</CardTitle>
                <CardDescription>Description example</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
      <CreateNewBoardButton className="absolute top-0 right-0" />
    </div>
  );
};
export default BoardPage;
