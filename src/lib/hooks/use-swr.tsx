import useSWR from 'swr';
import { Workspace } from "@prisma/client";
import { checkUser, getAuthUserDetails } from '../action/user';
import { getAllProjectsByWorkspaceId, getProjectDetails } from '../action/projects';
import { getNotificationAndUser } from '../action/workspace';


export function useGetAllProjectsByWorkspaceId(workspaceId: string) {
  const { data, isLoading, error } = useSWR('spaceById', ()=> getAllProjectsByWorkspaceId(workspaceId))
  return {
    spaceByWorkspaceId: data,
    isLoading,
    isError: error
  }
}

export function useCheckUser() {
  const { data, isLoading, error } = useSWR('checkUser', checkUser)
  return {
    isUser: data,
    isLoading,
    isError: error
  }
}

export function useUserDetails() {
  const { data, isLoading, error, mutate } = useSWR('userID', getAuthUserDetails)
  return {
    user: data,
    isLoading,
    isError: error,
    mutate
  }
}

export function useGetProjectDetails(projectsid: string){
  const { data, isLoading, error, mutate } = useSWR('projectsid', ()=> getProjectDetails(projectsid))
  return {
    data: data,
    isLoading,
    isError: error,
    mutate
  }
}

export function useGetNotificationAndUser(workspaceid: string){
  const { data, isLoading, error, mutate } = useSWR('notification', ()=> getNotificationAndUser(workspaceid))

  return{
    notification: data,
    isLoading,
    isError: error,
    mutate
  }
}

export function useGetNotesData(notesid: string){
  const { data } = useSWR('notes', ()=> getProjectDetails(notesid))

  return {
    notesData : data
  }
}