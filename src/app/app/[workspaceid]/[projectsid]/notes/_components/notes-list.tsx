import * as React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const NotesList = () => {
    return(
        <Link className='w-full overflow-hiden' href={'/'}>
            <div className='hover:bg-muted h-15 p-3'>
                <h3 className='text-md font-semibold'>Notes List</h3>
                <p className='line-clamp-1 text-xs w-full mt-1 text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet, neque eu rhoncus mattis, lectus sem aliquam arcu, vel consectetur nulla libero id mi.</p>
            </div>
            <Separator orientation='horizontal' />
        </Link>
    )
}
export default NotesList