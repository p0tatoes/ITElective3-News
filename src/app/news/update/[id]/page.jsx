'use client'

import '@/app/globals.css'
import { UpdateForm } from '@/components/UpdateForm'

// TODO: make an "update post" form
// Update form for a single news post
export default function UpdateNews({ params }) {
    const newsId = params.id

    return (
        <div className='flex flex-col gap-4 justify-center items-center m-10'>
            <h1 className='text-xl font-black'>
                Update News Post #{params.id}
            </h1>
            <UpdateForm id={newsId} />
        </div>
    )
}
