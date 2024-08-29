'use server'

import { Projects, Role, Tags, Task, User, UserWorkspace, Workspace } from '@prisma/client'
import { db } from '@/lib/server/db'
import { redirect } from 'next/navigation'
import { v4 } from 'uuid'
import { workspaceTypes } from '@/lib/types/db.types'
import { auth } from '@/lib/server/auth'

// create new workspace

export const createNewWorkspace = async ({
    name,
    workspace_logo,
}: {
    name: string
    workspace_logo: string
}) => {
    const session = await auth()
    const response = await db.workspace.create({
        data: {
            id: v4(),
            name: name,
            role: "CREATOR",
            workspace_logo: workspace_logo,
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
    })
    return response
}

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