import { useState } from 'react'

export const UpdateForm = ({ id }) => {
    const [updateData, setUpdateData] = useState({
        title: '',
        body: '',
    })

    const updateNews = async () => {
        const response = await fetch(`/api/news/update/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updateData),
        })

        location.href = `/news/${id}`
    }

    const handleChange = (e) => {
        if (e.target.id == 'title')
            setUpdateData({ ...updateData, title: e.target.value })
        if (e.target.id == 'body')
            setUpdateData({ ...updateData, body: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateNews()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 w-fit'
        >
            <input
                type='text'
                name='title'
                id='title'
                placeholder='Title'
                onChange={handleChange}
                className='bg-zinc-400 px-7 py-2 rounded-2xl shadow-lg placeholder:text-zinc-500'
            />
            <textarea
                name='body'
                id='body'
                cols='30'
                rows='10'
                onChange={handleChange}
                placeholder='Body'
                className='bg-zinc-400 px-7 py-2 rounded-2xl shadow-lg placeholder:text-zinc-500'
            ></textarea>
            <button
                type='submit'
                className='bg-zinc-400 px-7 py-2 rounded-2xl shadow-lg'
            >
                Update Post
            </button>
        </form>
    )
}
