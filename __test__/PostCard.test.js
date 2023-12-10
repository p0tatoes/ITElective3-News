import { Post } from '@/components/Post'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Home/Default Page', () => {
    it('should show a news post card', () => {
        const { getByText } = render(
            <Post
                id='1'
                author='Anon'
                title='Placeholder'
                body='Lorem Ipsum'
                createdAt='12-9-2023 12:00:00'
            />
        )

        const author = getByText('posted by: Anon')
        const title = getByText('Placeholder')
        const body = getByText('Lorem Ipsum')
        const createdAt = getByText('12-9-2023 12:00:00')

        expect(author).toBeInTheDocument()
        expect(title).toBeInTheDocument()
        expect(body).toBeInTheDocument()
        expect(createdAt).toBeInTheDocument()
    })
})
