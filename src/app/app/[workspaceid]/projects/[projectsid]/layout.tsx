import React from "react"

type Props = {
    children: React.ReactNode
}

const ProjectLayout = ({children} : Props) =>{
    return(
        <div>
            hello layout project ID
            {children}
        </div>
    )
}
export default ProjectLayout