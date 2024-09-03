'use server'

import { User } from '@prisma/client'
import { db } from '@/lib/server/db'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/server/auth'

export const getUserByEmail = async (email : string | undefined) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email: email,

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
        where: { email: user.email },
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
            email: session.user?.email as string
        },
    })
    if (loggedInUser) {
        return loggedInUser
    } else {
        redirect('/sign-in')
    }
    
}

// Init User with Role

export const initUser = async (newUser: Partial<User>) => {
    const session = await auth()
    if (!session) return

    const userData = await db.user.upsert({
        where: {
            email: session.user?.email as string,
        },
        update: newUser,
        create: {
            id: newUser.id,
            image: newUser.image,
            name: newUser.name as string,
            username: newUser.username,
            email: newUser.email as string,
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
            email: user.user?.email as string
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