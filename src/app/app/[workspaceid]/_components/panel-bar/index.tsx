import ButtonFilter from '@/app/app/[workspaceid]/_components/button-filter'
import { Input } from '@/components/ui/input'

const PanelBar = () => {
    return (
        <div className="flex items-center space-x-2">
            <ButtonFilter />
            <Input className="max-w-72 w-full" placeholder="Search" type="search" />
        </div>
    )
}
export default PanelBar
