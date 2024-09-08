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
import { SignOutButton } from "./signout-button";
import { FluentPerson24Regular } from "../icons/person";
import { FluentSettings24Regular } from "../icons/settings";
import { FluentSignOut24Regular } from "../icons/sign-out";
import { useUserDetails } from "@/lib/hooks/use-swr";
import { signOut } from "next-auth/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { shortText } from "@/lib/utils";

const UserButtonCustom = () => {
  const { user } = useUserDetails()
  
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
          className="CardStyle min-w-[200px] w-full"
          align="end"
        >
          <DropdownMenuLabel className="grid gap-1">
            <span>{user?.email}</span>
            <span className="text-xs text-muted-foreground">
              {user?.name}
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
            <button className="flex items-center gap-2" onClick={() => signOut()}>
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
