"use client"

import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { signOut } from "next-auth/react"
import { FluentPerson24Regular } from "../icons/person";
import { FluentSettings24Regular } from "../icons/settings";
import { FluentSignOut24Regular } from "../icons/sign-out";
import { useUserDetails } from "@/lib/hooks/use-swr";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { shortText } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const UserButtonCustom = () => {
  const { user, isError, isLoading } = useUserDetails()

  if(isLoading){
    return <Skeleton className="h-13 w-64" />
  }

  if(isError){
    return <div>Error</div>
  }

  const handleSignOut = async () =>{
    try {
      await signOut()
      console.log('signout success')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <DropdownMenu>  
        <DropdownMenuTrigger className="w-full h-13" asChild>
          <Button
            variant="outline"
            className="flex items-center justify-start gap-2 rounded-xl w-full"
          >
            <Avatar>
              <AvatarImage src={`${user?.image}`} alt="@taskyapp" />
              <AvatarFallback>{shortText(user?.name)}</AvatarFallback>
            </Avatar>
            <span>{user?.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="CardStyle w-full min-w-60"
          align="end"
        >
          <DropdownMenuLabel className="grid gap-1 overflow-x-hidden">
            <span className="line-clamp-1">{user?.email}</span>
            <span className="text-xs text-muted-foreground line-clamp-1">
              {user?.username}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href="/account/profile">
              <FluentPerson24Regular />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href="/account/settings">
              <FluentSettings24Regular />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center gap-2" onClick={handleSignOut}>
              <FluentSignOut24Regular />
              Sign Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButtonCustom;
