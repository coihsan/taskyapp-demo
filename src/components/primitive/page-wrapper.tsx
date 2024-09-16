import React from "react"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {
    children: React.ReactNode,
    orientation?: "vertical" | "horizontal",
    className?: string
}

const PageWrapper = ({ children, orientation, className }: Props) =>{
    return(
        <ScrollArea className={className}>
            {children}
            <ScrollBar orientation={orientation} />
        </ScrollArea>
    )
}
export default PageWrapper