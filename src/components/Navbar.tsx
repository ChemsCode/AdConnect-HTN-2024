import { UserPen } from 'lucide-react'
import {Card} from '@/components/ui/card'
export default function Navbar() {
    return (
        <div className='flex justify-between p-5'>
            <h1 className='text-2xl font-semibold'>AdConnect</h1>
            <div className='flex gap-3'>
            <Card className='px-3 py-1'>
                <p>Sponsor</p>
            </Card>
            <button>
                <UserPen />
            </button>
            </div>
        </div>
    )
}