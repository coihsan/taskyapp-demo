import ButtonFilter from '@/app/app/[workspaceid]/_components/button-filter'
import { Input } from '@/components/ui/input'

const PanelBar = () => {
    return (
        <div>
            <div className="flex items-center gap-2 pb-6">
                <ButtonFilter />
                <Input className="w-72 h-9" placeholder="Search" type="search" />
            </div>
        </div>
    )
}
export default PanelBar
