import React from "react"

type BoardProps = {
    params:{
        workspaceid: string;
        boardid: string;
    }
}

const BoardIDPage = ({ params } : BoardProps) =>{
    return(
        <div>
            <h1>Hello Board ID : {params.boardid}</h1>
        </div>
    )
}

export default BoardIDPage