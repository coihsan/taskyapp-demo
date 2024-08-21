'use server'

import { Projects, Role, Tags, Task, User, UserWorkspace, Workspace } from '@prisma/client'
import { db } from './db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { v4 } from 'uuid'
import { clerkClient } from '@clerk/nextjs/server'
import { workspaceTypes } from './types/db.types'

// INVITATION
export const verifyAndAcceptInvitation = async () => {
    const user = await currentUser()
    
    if (!user) return redirect('/sign-in')
    const invitationExists = await db.invitation.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
            workspaceId: user.id,
        },
    })
}

// UPDATE USER INFORMATION

export const updateUser = async (user: Partial<User>) => {
    const response = await db.user.update({
        where: { email_user: user.email_user },
        data: { ...user },
    })

    return response
}

// Check user if logged in or not, and create new user if not logged in

export const checkUser = async () => {
    const user = await currentUser()

    if (!user) {
        return null
    }
    const loggedInUser = await db.user.findUnique({
        where: {
            email_user: user.emailAddresses[0].emailAddress,
        },
    })
    if (loggedInUser) {
        return loggedInUser
    }
    const createUser = await db.user.create({
        data: {
            clerkId: user.id,
            full_name: user.fullName as string,
            username: user.username as string,
            email_user: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
        },
    })
    return createUser
}

// GET USER INFORMATION

export const getAuthUserDetails = async () => {
    const user = await currentUser()
    if(!user) return null

    const response = await db.user.findUnique({
        where:{
            email_user: user.emailAddresses[0].emailAddress
        },
        include:{
            user_workspace: {
                include:{
                    workspace: true
                }
            }
        }
    })
    return response
};

// Delete User Account

export const deleteUser = async (userId: string) => {
    await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
            role: undefined,
        },
    })
    const deletedUser = await db.user.delete({
        where: { id: userId },
    })

    return deletedUser
}

// Create new project

export const createNewProject = async (name: string, workspaceId: string) =>{
    const workspaceCreator = await db.userWorkspace.findUnique({
        where:{
            workspaceId: workspaceId
        }
    })
    console.log(`workspace ID is : `, + workspaceId)

    if(!workspaceCreator) return null

    const response = await db.projects.create({
        data:{
            id: v4(),
            name: name,
            workspace:{
                connect:{
                    id: workspaceCreator.workspaceId
                }
            }
        }
    })
    return {...response, workspaceId}
}

// create new workspace

export const createNewWorkspace = async ({
    name,
    workspace_logo,
}: {
    name: string
    workspace_logo: string
}) => {
    const user = await currentUser()
    const response = await db.workspace.create({
        data: {
            id: v4(),
            name: name,
            workspace_logo: workspace_logo,
            user_workspace: {
                create: {
                    user: {
                        connect: {
                            email_user: user?.emailAddresses[0].emailAddress,
                        },
                    },
                },
            },
        },
    })
    return response
}

// Get user permissions

export const getUserPermissions = async (userId: Partial<User>) => {
    const response = await db.user.findUnique({
        where: { email_user: userId.email_user },
        include: {
            permissions: {
                include: {
                    workspace: true,
                },
            },
        },
    })
    return response
}

// CREATE WORKSPACE TEAM

export const createWorkspaceTeam = async (workspaceId: string, user: User) => {
    if (!user) return null
    const response = await db.user.create({
        data: {
            ...user,
        },
    })
    return response
}
  
  // get all space by workspaceId
  
  export const getAllProjectsByWorkspaceId = async (workspaceId: string) =>{
    const workspaceById = await db.workspace.findUnique({
      where:{
        id: workspaceId
      },
    })
    if(workspaceById){
      const response = await db.projects.findMany({
        where:{
            workspaceId: workspaceId
        },
        select:{
          name: true,
          id: true,
          workspaceId: true
        }
      })
      return response
    }
    return []
  }

  // create projects option
export const featureOptions = async (workspaceId: string, projectsId: string)=>{
    const response = await db.projects.update({
        where:{
            id: projectsId
        },
        data:{
            featureOption:{
                create:[
                    {
                        id: v4(),
                        name: "Board",
                        link: `/workspace/${workspaceId}/projects/${projectsId}/board`
                    },
                    {
                        id: v4(),
                        name: "Memos",
                        link: `/workspace/${workspaceId}/projects/${projectsId}/memos`
                    },
                    {
                        id: v4(),
                        name: "Todos",
                        link: `/workspace/${workspaceId}/projects/${projectsId}/todos`
                    }
                ]
            }
        }
    })
    return response
}

// upsert new board
export const upsertNewBoard = async (
    projectId: string,
    boardName: string,
    tags: Tags[],
    task: Task[]
) =>{
    const response = await db.board.upsert({
        where:{
            id: v4()
        },
        update: {
            title: boardName,
        },
        create:{
            id: v4(),
            title: boardName,
            projectId: projectId,
            task:{
                create:{
                    ...task,
                    tags: {
                        create: {
                            ...tags
                        }
                    }
                }
            }
        }
    })
}