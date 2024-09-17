"use client"

import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Add24Filled } from '@fluentui/react-icons'
import CustomModal from '@/components/primitive/custom-modal'
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
                        <Add24Filled />
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