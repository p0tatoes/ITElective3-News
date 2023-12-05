'use client'

import '@/app/globals.css'
import { UpdateForm } from '@/components/UpdateForm'

// TODO: make an "update post" form
// Update form for a single news post
export default function UpdateNews({ params }) {
    const newsId = params.id

    return (
        <div>
            Update News Post #{params.id}
            <UpdateForm id={newsId} />
        </div>
    )
}
