"use client"

import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { FluentAdd24Filled } from '@/components/icons/add-24-filled'
import CustomModal from '@/components/primitive/custom-modal'
import NewProjectsForm from '@/components/form/new-projects-form'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import CreateNewCalenderForm from '../form/create-new-calender-form'

const CreateNewCalenderButton = () => {
    const { setOpen } = useModal();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size={'icon'}
                        variant={'ghost'}
                        onClick={() => {
                            setOpen(
                                <CustomModal
                                    title='Create Schedule'
                                    subheading='Deploy your new project in one-click.'
                                >
                                    <CreateNewCalenderForm />
                                </CustomModal>
                            )
                        }}
                        >
                            New
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
export default CreateNewCalenderButton