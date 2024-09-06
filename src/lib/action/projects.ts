"use server";

import { Card, Column, Prisma, Projects, SubTask } from "@prisma/client";
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

// Create new board

export const createNewBoard = async (title: string, projectsId: string) => {
  const projectOwner = await db.projects.findUnique({
    where: {
      id: projectsId,
    },
  });
  if (!projectOwner) return null;

  const response = await db.board.create({
    data: {
      id: v4(),
      title: title,
      project: {
        connect: {
          id: projectOwner.id,
        },
      },
    },
  });
  return response;
};

// Get All Board by Projects ID
export const getAllBoardsByProjectId = async (projectsId: string) => {
  const response = await db.board.findMany({
    where: {
      projectId: projectsId,
    },
    select: {
      title: true,
      id: true,
      projectId: true,
    },
  });
  return response;
};

// Upsert new column
export const upsertColumn = async (column: Column) => {
  const response = await db.column.upsert({
    where: {
      id: v4(),
    },
    update: column,
    create: column,
  });
  return response;
};

// upsert new card
export const createNewCard = async (
  title: string,
  description: string,
  columnIndex: number,
  rowIndex: number,
  columnId: string,
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
      column: {
        connect: {
          id: columnId,
        },
      },
      column_index: columnIndex,
      row_index: rowIndex,
    },
  });
  return response;
};

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
