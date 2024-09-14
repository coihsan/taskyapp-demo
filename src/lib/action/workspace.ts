"use server";

import { Role, User } from "@prisma/client";
import { db } from "@/lib/server/db";
import { v4 } from "uuid";
import { auth } from "@/lib/server/auth";

// create new workspace

export const createNewWorkspace = async ({ name }: { name: string }) => {
  const session = await auth();
  const response = await db.workspace.create({
    data: {
      id: v4(),
      name: name,
      user_workspace: {
        create: {
          user: {
            connect: {
              email: session?.user?.email as string,
            },
          },
        },
      },
    },
  });
  return response;
};

// Get user permissions

export const getUserPermissions = async (userId: Partial<User>) => {
  const response = await db.user.findUnique({
    where: { email: userId.email },
    include: {
      permissions: {
        include: {
          workspace: true,
        },
      },
    },
  });
  return response;
};

// CREATE WORKSPACE TEAM

export const createWorkspaceTeam = async (workspaceId: string, user: User) => {
  if (!user) return null;
  const response = await db.user.create({
    data: {
      ...user,
    },
  });
  return response;
};

// Get notification and User

export const getNotificationAndUser = async (workspaceid: string) => {
  try {
    const response = await db.notification.findMany({
      where: { id: workspaceid },
      include: { user: true },
      orderBy: {
        created_at: "desc",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const sendInvitation = async (
  role: Role,
  email: string,
  workspaceId: string
) => {
  const invitation = await db.invitation.create({
    data: { email, workspaceId, role },
  });

  const invitationToken = v4();

  await db.invitation.update({
    where: { id: invitation.id },
    data:{
      workspaceId: invitation.workspaceId,
      role: invitation.role,
      email: invitation.email,
      status: invitation.status,
    },
  });

  await sendInvitationEmail(email, invitationToken);

  return invitation;
};

const sendInvitationEmail = async (email: string, workspaceid: string) => {
  const invitationLink = `${process.env.NEXT_PUBLIC_URL}/${workspaceid}`;
};
