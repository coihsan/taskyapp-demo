import React from "react"
import dynamic from "next/dynamic"

type NotesIdProps = {
    params:{
        workspaceid: string,
        projectsid: string,
        notesid: string
    }
}
const Notes = dynamic(() => import('@/app/app/[workspaceid]/[projectsid]/notes/_components/notes'), {
    ssr: false,
})

const NotesIdPage = ({ params } : NotesIdProps ) =>{
    return(
        <div>
            <Notes />
        </div>
    )
}
export default NotesIdPage