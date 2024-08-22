import { FluentAlertBadge24Filled } from "../icons/alert-notif"
import { CheckIcon } from "../icons/check"

interface FormAuthProps{
    message: string | undefined
}

export const FromAuthError = ({message} : FormAuthProps) =>{
    if (!message) return null;
    return(
        <div className="bg-red-500/10 p-3 rounded-md flex items-center gap-x-2 text-red-500">
            <FluentAlertBadge24Filled className="size-5" />
            <span>{message}</span>
        </div>
    )
}

export const FormAuthSuccess = ({message} : FormAuthProps) =>{
    if (!message) return null;
    return(
        <div className="bg-green-500/10 p-3 rounded-md flex items-center gap-x-2 text-green-500">
            <CheckIcon className="size-5" />
            <span>{message}</span>
        </div>
    )
}