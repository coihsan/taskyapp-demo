'use server'

import { Projects, Role, Tags, Task, User, UserWorkspace, Workspace } from '@prisma/client'
import { db } from '@/lib/server/db'
import { redirect } from 'next/navigation'
import { v4 } from 'uuid'
import { workspaceTypes } from '@/lib/types/db.types'
import { auth } from '@/lib/server/auth'
import { userAgent } from 'next/server'

export const getUserByEmail = async (email : string | undefined) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email_user: email,

            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (id : string) =>{
    try {
        const user = await db.user.findUnique({
            where:{
                id
            }
        })
        return user
    } catch (error) {
        return null
    }
}

// INVITATION
// export const verifyAndAcceptInvitation = async () => {
//     const user = await auth()
    
//     if (!user) return redirect('/sign-in')
//     const invitationExists = await db.invitation.findUnique({
//         where: {
//             email: user.,
//             workspaceId: user.id,
//         },
//     })
// }

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
    const session = await auth()

    if (!session) {
        return null
    }
    const loggedInUser = await db.user.findUnique({
        where: {
            email_user: session.user?.email as string
        },
    })
    if (loggedInUser) {
        return loggedInUser
    }
    const user = session.user
    const createUser = await db.user.create({
        data: {
            full_name: user?.name as string,
            username: user?.email as string,
            email_user: user?.email as string,
            imageUrl: session.user?.image as string,
        },
    })
    return createUser
}

// Init User with Role

export const initUser = async (newUser: Partial<User>) => {
    const session = await auth()
    if (!session) return

    const userData = await db.user.upsert({
        where: {
            email_user: session.user?.email as string,
        },
        update: newUser,
        create: {
            id: newUser.id,
            imageUrl: newUser.imageUrl,
            full_name: newUser.full_name as string,
            username: newUser.username,
            email_user: newUser.email_user as string,
        },
    })
    return userData
}

// GET USER INFORMATION

export const getAuthUserDetails = async () => {
    const user = await auth()
    if(!user) return null

    const response = await db.user.findUnique({
        where:{
            email_user: user.user?.email as string
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