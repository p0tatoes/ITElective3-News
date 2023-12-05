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

        location.href = '/news/2'
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Title'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='body'
                    id='body'
                    placeholder='Body'
                    onChange={handleChange}
                />
                <button type='submit'>Update Post</button>
            </form>
        </div>
    )
}
