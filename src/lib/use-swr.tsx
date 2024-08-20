import useSWR from 'swr';
import { checkUser, getAllProjectsByWorkspaceId, getAuthUserDetails } from "@/lib/action";
import { Workspace } from "@prisma/client";


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