"use client";
import React, { useState } from "react";
import { Labels } from "@prisma/client";
import { useModal } from "@/providers/modal-provider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { v4 } from "uuid";

type Props = {
  projectsid: string;
  cardid: string;
};
const LabelsCreator = () => {

  return (
    <AlertDialog>
        <Command></Command>
    </AlertDialog>
  )
};
export default LabelsCreator;
