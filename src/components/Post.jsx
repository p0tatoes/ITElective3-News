export const Post = ({ id, title, author, body, createdAt, updatedAt }) => {
    return (
        <div
            key={id}
            className='p-6 w-80 h-80 bg-zinc-400 flex flex-col gap-2 shadow-xl rounded-xl'
        >
            <h1 className='text-2xl text-zinc-900 font-black uppercase truncate'>
                {title}
            </h1>
            <h2 className='font-medium italic text-zinc-900 truncate'>
                posted by: {author}
            </h2>
            <h3 className='font-medium italic text-zinc-900 truncate'>
                {createdAt}
            </h3>
            <p className='line-clamp-[8] text-justify text-sm'>{body}</p>
        </div>
    )
}
