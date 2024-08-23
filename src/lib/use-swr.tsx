import useSWR from 'swr';
import { Workspace } from "@prisma/client";
import { checkUser, getAuthUserDetails } from './action/user';
import { getAllProjectsByWorkspaceId } from './action/projects';


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