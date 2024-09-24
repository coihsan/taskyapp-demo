"use server"

import { Notes } from "@prisma/client"
import { db } from "../server/db"

export const getAllNotes = async (projectsid: string) =>{
    const response = await db.notes.findMany({
        where:{
            projectId: projectsid
        }
    })
    return response
}
export const getNotesData = async (notesid: string) =>{
    const response = await db.notes.findFirst({
        where:{
            id: notesid
        },
    })
    return response
}
export const createNewNotes = async (projectsid: string, notes: Notes) =>{
    const response = await db.notes.create({
        data:{
            ...notes,
            projectId: projectsid
        }
    })
    return response
}