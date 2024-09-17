import React from "react"
import { db } from "@/lib/server/db";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams:{
      workspaceid: string,
      projectsid: string,
      notesid: string
  }
}
const Page = async ({searchParams} : PageProps) => {
  const data = await db.notes.findFirst({
    where:{
      id: searchParams.notesid
    }
  })

  if(data){
    return redirect(`/app/${searchParams.workspaceid}/${searchParams.projectsid}/notes/${searchParams.notesid}`)
  } else {
    return null
  }

};

export default Page;
