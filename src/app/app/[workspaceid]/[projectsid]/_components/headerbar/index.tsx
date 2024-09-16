import ButtonFilter from "@/components/global/button-filter"
import ProjectProfile from "../project-profile"
import FeatureOption from "../feature-option"

const HeaderBarProject = () =>{
    return(
        <nav className="flex flex-col">
            <ProjectProfile />
            <FeatureOption />
        </nav>
    )
}
export default HeaderBarProject