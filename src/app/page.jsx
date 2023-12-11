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
        <div>
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
            <a href='/news/create'>
                <button className='px-10 py-2 bg-green-600 text-white font-bold rounded-2xl bottom-10 right-10 fixed'>
                    Create new post
                </button>
            </a>
        </div>
    )
}
