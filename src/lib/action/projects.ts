"use server";

import { Card, Board, Prisma, Projects, SubTask } from "@prisma/client";
import { db } from "@/lib/server/db";
import { v4 } from "uuid";

// Create new project
export const createNewProject = async (name: string, workspaceId: string) => {
  const workspaceCreator = await db.userWorkspace.findUnique({
    where: {
      workspaceId: workspaceId,
    },
  });

  if (!workspaceCreator) return null;

  const response = await db.projects.create({
    data: {
      id: v4(),
      name: name,
      workspace: {
        connect: {
          id: workspaceCreator.workspaceId,
        },
      },
    },
  });
  return { ...response, workspaceId };
};

// get all space by workspaceId
export const getAllProjectsByWorkspaceId = async (workspaceId: string) => {
  const workspaceById = await db.userWorkspace.findUnique({
    where: {
      workspaceId: workspaceId,
    },
    include: {
      workspace: true,
    },
  });
  if (workspaceById) {
    const response = await db.projects.findMany({
      where: {
        workspaceId: workspaceId,
      },
      select: {
        name: true,
        id: true,
        workspaceId: true,
      },
    });
    return response;
  }
  return [];
};

// create projects option
export const featureOptionAction = async (
  projectsid: string,
  workspaceid: string,
  name: string,
) =>{
  const projectDetails = await db.projects.findUnique({
    where:{
      id: projectsid
    }
  })
  if (!projectDetails) return null;

  const response = await db.featureOptions.create({
    data:{
      id: v4(),
      name: name,
      link: `app/${workspaceid}/projects/${projectsid}/${name}`,
      project:{
        connect:{
          id: projectDetails.id
        }
      }
    }
  })
  return response
}

// Upsert new board
export const upsertBoard = async (board: Board, projectId: string) => {
  const projectData = await db.projects.findUnique({
    where: {id: projectId}
  })
  const response = await db.board.upsert({
    where: {
      id: v4(),
    },
    update: board,
    create: {
       ...board,
       projectId: projectData?.id as string
      },
  });
  return response;
};

// upsert new card
export const upsertCard = async (
  title: string,
  description: string,
  columnIndex: number,
  rowIndex: number,
  boardId: string,
  content: string,
  cards: Card
) => {
  const response = await db.card.upsert({
    where: {
      id: v4(),
    },
    update: { ...cards },
    create: {
      id: v4(),
      title: title,
      content: content,
      description: description,
      board: {
        connect: {
          id: boardId,
        },
      },
      column_index: columnIndex,
      row_index: rowIndex,
    },
  });
  return response;
};

// get all board

export const getAllBoard = async () =>{
  const response = await db.board.findMany({
    include:{
      cards: true
    }
  })
  return response
}

// upsert sub task
export const createSubTask = async (
  title: string,
  content: string,
  cardId: string,
  subTask: SubTask
) => {
  const response = await db.subTask.upsert({
    where: {
      id: v4(),
    },
    update: { ...subTask },
    create: {
      id: v4(),
      title: title,
      content: content,
      card: {
        connect: {
          id: cardId,
        },
      },
    },
  });
  return response;
};

export const getProjectDetails = async (projectsid: string) => {
  const response = await db.projects.findUnique({
    where: {
      id: projectsid,
    },
  });
  return response;
};
