import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Add24Filled, MoreHorizontal24Regular, Delete24Regular } from "@fluentui/react-icons";
  
const ColumnOptions = () => {
    return(
        <div className="flex items-center gap-2">
            <Button variant={'ghost'} size={'icon'}>
                <Add24Filled className="size-4" />
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreHorizontal24Regular className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Details</DropdownMenuItem>
                <DropdownMenuItem>
                    <Delete24Regular className="size-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ColumnOptions