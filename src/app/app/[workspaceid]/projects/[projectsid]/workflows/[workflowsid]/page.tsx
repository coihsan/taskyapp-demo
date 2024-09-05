import React from "react"

type Props = {
    params:{
        workspaceid: string,
        projectsid: string,
        workflowsid: string
    }
}

const Page = ( {params} : Props ) =>{
    return (
        <h1>Hello</h1>
    )
}

export default Page;