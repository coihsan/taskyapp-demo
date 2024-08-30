'use server'

import { Projects, Role, Tags, Task, User, UserWorkspace, Workspace } from '@prisma/client'
import { db } from '@/lib/server/db'
import { redirect } from 'next/navigation'
import { v4 } from 'uuid'
import { workspaceTypes } from '@/lib/types/db.types'
import { auth } from '@/lib/server/auth'


// Create new project

export const createNewProject = async (name: string, workspaceId: string) =>{
    const workspaceCreator = await db.workspace.findUnique({
        where:{
            id: workspaceId
        }
    })

    if(!workspaceCreator) return null

    const response = await db.projects.create({
        data:{
            id: v4(),
            name: name,
            workspace:{
                connect:{
                    id: workspaceCreator.id
                }
            }
        }
    })
    return {...response, workspaceId}
}

// get all space by workspaceId
export const getAllProjectsByWorkspaceId = async (workspaceId: string) =>{
    const workspaceById = await db.userWorkspace.findUnique({
      where:{
        workspaceId: workspaceId
      },
      include:{
        workspace: true
      }
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