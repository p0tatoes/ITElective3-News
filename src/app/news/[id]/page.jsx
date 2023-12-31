'use client'

import '@/app/globals.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// View single news post
export default function SingleNews({ params }) {
    const newsId = params.id

    const [news, setNews] = useState({
        id: 0,
        title: '',
        author: '',
        body: '',
        createdAt: '',
    })

    async function getPost() {
        const response = await fetch(`/api/news/${newsId}`)
        const data = await response.json()
        setNews({
            id: data.id,
            title: data.title,
            author: data.author,
            body: data.body,
            createdAt: data.upload_date,
        })
    }

    const handleDelete = async () => {
        const confirmDel = confirm('Are you sure you want to delete this post?')

        if (confirmDel) {
            await fetch(`/api/news/delete/${newsId}`, { method: 'DELETE' })
            location.href = '/'
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            <a href='/' className='ml-3 mt-1 inline-block text-lg hover:text-orange-500 hover:font-semibold'>
                Home
            </a>
            <div
                key={news.id}
                className='flex flex-col gap-4 justify-center items-center mt-10 mb-28 mx-64'
            >
                <h1 className='text-3xl font-black uppercase'>{news.title}</h1>
                <h2 className='text-xl font-semibold'>by: {news.author}</h2>
                <h2 className='italic'>{news.createdAt}</h2>
                <p className='text-lg text-justify'>{news.body}</p>
                <div className='flex gap-6 fixed bottom-10 right-10'>
                    <button
                        onClick={handleDelete}
                        className='px-10 py-2 bg-red-600 text-white font-bold rounded-2xl'
                    >
                        Delete
                    </button>
                    <a href={`/news/update/${newsId}`}>
                        <button className='px-10 py-2 bg-orange-600 text-white font-bold rounded-2xl'>
                            Update
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
