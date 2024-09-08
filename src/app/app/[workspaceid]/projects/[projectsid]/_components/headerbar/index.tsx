import ButtonFilter from "@/components/global/button-filter"
import ProjectProfile from "../project-profile"

const HeaderBarProject = () =>{
    return(
        <nav className="flex flex-col pb-6">
            <ProjectProfile />
            <div className="flex justify-between items-center mt-4">
                <ButtonFilter />
            </div>
        </nav>
    )
}
export default HeaderBarProject