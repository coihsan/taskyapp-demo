import React from "react"
import { db } from "@/lib/server/db";
import { redirect } from "next/navigation";

type PageProps = {
  params:{
      workspaceid: string,
      projectsid: string,
      notesid: string
  }
}
const Page = async ({params} : PageProps) => {
  return(
    <div>
      Notes
    </div>
  )

};

export default Page;
