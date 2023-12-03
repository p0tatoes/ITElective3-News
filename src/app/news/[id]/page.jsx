'use client'

import '@/app/globals.css'
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
        console.log(news)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div key={news.id}>
            <h1>{news.title}</h1>
            <h2>{news.author}</h2>
            <h2>{news.createdAt}</h2>
            <p>{news.body}</p>
        </div>
    )
}
