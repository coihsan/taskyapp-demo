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
import CreateNewBoardForm from '@/components/form/create-new-board-form'

interface Props {
    className?: string
}

const CreateNewBoardButton = ({className} : Props) => {
    const { setOpen } = useModal();

    return (
        <div className={className}>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={'default'}
                        size={'icon'}
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
                        <FluentAdd24Filled />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>New board</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        </div>
    )
}
export default CreateNewBoardButton