import { auth } from '@/lib/server/auth'
import { db } from '../server/db'

export const getUserByEmail = async (email : string | undefined) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email_user: email,

            }
        })
        return user
    } catch (error) {
        
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