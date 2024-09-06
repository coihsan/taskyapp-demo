import React, {useState} from "react"
import { SidebarContent } from "@/components/global/sidebar-content"

const SidebarOption = () =>{
    const [sidebarFeature, setSidebarFeature] = useState(false)

    return(
        <div>
            <SidebarContent>Helo</SidebarContent>
        </div>
    )
}
export default SidebarOption