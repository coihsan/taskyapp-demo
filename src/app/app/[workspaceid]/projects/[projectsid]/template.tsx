import React from "react"
import HeaderBarProject from "./_components/headerbar"

type Props = {
    children: React.ReactNode
}

const ProjectLayout = ({children} : Props) =>{
    return(
        <div>
            <HeaderBarProject />
            {children}
        </div>
    )
}
export default ProjectLayout