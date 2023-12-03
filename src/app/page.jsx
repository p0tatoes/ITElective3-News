'use client'

import { useEffect, useState } from 'react'
import '@/app/globals.css'
import { Post } from '@/components/Post'

// List of all news posts
export default function AllNews() {
    const [posts, setPosts] = useState([])

    async function getAllNews() {
        const response = await fetch('/api/news/')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        getAllNews()
    }, [])

    return (
        <div className='flex flex-row flex-wrap gap-5 m-24'>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    body={post.body}
                    createdAt={post.upload_date}
                />
            ))}
        </div>
    )
}
