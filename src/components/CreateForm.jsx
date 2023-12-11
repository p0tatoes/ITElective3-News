import React, { useState } from 'react'

const CreateForm = () => {
    const [postData, setPostData] = useState({
        title: '',
        author: '',
        body: '',
    })

    const submitPost = async () => {
        const response = await fetch(`/api/news/create`, {
            method: 'POST',
            body: JSON.stringify(postData),
        })

        location.href = '/'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitPost()
    }

    return (
        <div className='ml-6 mt-6'>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        className='mb-3 ml-7 border border-solid border-1'
                        id='title'
                        name='title'
                        type='text'
                        value={postData.title}
                        placeholder='title'
                        onChange={(e) =>
                            setPostData({ ...postData, title: e.target.value })
                        }
                    />
                </label>
                <br />
                <label>
                    Author:
                    <input
                        className='mb-3 ml-3 border border-solid border-1'
                        id='author'
                        name='author'
                        type='text'
                        value={postData.author}
                        placeholder='author'
                        onChange={(e) =>
                            setPostData({ ...postData, author: e.target.value })
                        }
                    />
                </label>
                <br />
                <div>
                    <label>
                        Body:
                        <textarea
                            className='border border-solid border-1 mt-2 pr-[92px] pb-20 flex flex-col col-1'
                            id='body'
                            name='body'
                            value={postData.body}
                            placeholder='body'
                            onChange={(e) =>
                                setPostData({
                                    ...postData,
                                    body: e.target.value,
                                })
                            }
                        />
                    </label>
                </div>

                <br />
                <button
                    className='mt-2 bg-green-700 p-2 rounded text-white'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateForm
