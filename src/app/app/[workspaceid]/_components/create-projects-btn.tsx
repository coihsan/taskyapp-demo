"use client"

import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { FluentAdd24Filled } from '@/components/icons/add-24-filled'
import CustomModal from '@/components/global/custom-modal'
import NewProjectsForm from '@/components/form/new-projects-form'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const CreateNewProjectButton = () => {
    const { setOpen } = useModal();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size={'icon'}
                        variant={'ghost'}
                        className='size-6'
                        onClick={() => {
                            setOpen(
                                <CustomModal
                                    title='Create new project'
                                    subheading='Create new project'
                                >
                                    <NewProjectsForm />
                                </CustomModal>
                            )
                        }}
                    >
                        <FluentAdd24Filled />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>New project</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default CreateNewProjectButton