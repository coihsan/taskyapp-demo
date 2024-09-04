"use client"

import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { FluentAdd24Filled } from '@/components/icons/add-24-filled'
import CustomModal from '@/components/global/custom-modal'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import NewWorkspaceForm from '@/components/form/new-workspace-form'
import CreateNewBoardForm from '@/components/form/create-new-board-form'


const CreateNewBoardButton = () => {
    const { setOpen } = useModal();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={'default'}
                        className='flex items-center gap-2 w-full'
                        onClick={() => {
                            setOpen(
                                <CustomModal
                                    title='Create Board'
                                    subheading='Create new workspace'
                                >
                                    <CreateNewBoardForm />
                                </CustomModal>
                            )
                        }}
                    >
                        New Board
                        <FluentAdd24Filled />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>New board</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default CreateNewBoardButton