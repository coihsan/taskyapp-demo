"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FluentAdd24Filled } from "@/components/icons/add-24-filled";
import { workspaceMenu } from "@/lib/const";
import { useState } from "react";
import ProjectProfile from "@/components/global/project-profile";

const HeaderOption = () => {
  const pathname = usePathname();
  const params = useParams<{projectsid: string}>()
  const [addFeature, setAddFeature] = useState(0);

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size={"icon"} variant={"outline"}>
                  <FluentAdd24Filled />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="CardStyle">
                {workspaceMenu.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <span>{item.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent>
            <p>Create new ...</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default HeaderOption;
