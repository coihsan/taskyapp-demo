"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import CustomModal from "@/components/global/custom-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FluentAdd24Filled } from "../icons/add-24-filled";

interface Props {
  className?: string;
  buttonName?: string;
  title: string;
  subheading: string;
  children: React.ReactNode;
  useIcon?: boolean;
  variant?: "default" | "ghost";
  size?: "default" | "icon" | "sm" | "lg";
}

const CreateButtonGlobal = ({
  className,
  title,
  subheading,
  children,
  useIcon,
  variant,
  size,
  buttonName,
}: Props) => {
  const { setOpen } = useModal();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={className}
            onClick={() => {
              setOpen(
                <CustomModal title={title} subheading={subheading}>
                  {children}
                </CustomModal>
              );
            }}
          >
            {useIcon && <FluentAdd24Filled />}
            <span>{buttonName}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default CreateButtonGlobal;
