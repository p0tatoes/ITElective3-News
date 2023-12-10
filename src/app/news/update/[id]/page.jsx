'use client'

import '@/app/globals.css'
import { UpdateForm } from '@/components/UpdateForm'
import { useEffect, useState } from 'react'

// Update form for a single news post
export default function UpdateNews({ params }) {
    const newsId = params.id

    const [oldData, setOldData] = useState({
        title: '',
        body: '',
    })

    const getOldData = async () => {
        const res = await fetch(`/api/news/${newsId}`)
        const data = await res.json()
        setOldData({
            title: data.title,
            body: data.body,
        })
    }

    useEffect(() => {
        getOldData()
    }, [])

    return (
        <div className='flex flex-col gap-4 justify-center items-center m-10'>
            <h1 className='text-xl font-black'>
                Update News Post #{params.id}
            </h1>
            <UpdateForm
                id={newsId}
                title={oldData.title}
                body={oldData.body}
            />
        </div>
    )
}
