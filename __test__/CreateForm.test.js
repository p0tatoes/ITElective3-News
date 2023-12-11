import CreateForm from '@/components/CreateForm'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'

global.fetch = jest.fn()

beforeEach(() => {
    jest.clearAllMocks()
})

describe('Create News Form', () => {
    describe('title textbox', () => {
        it('should show textbox label', () => {
            const { getByLabelText } = render(<CreateForm />)

            expect(getByLabelText('Title:')).toBeInTheDocument()
        })
        it('should show textbox', () => {
            const { getByPlaceholderText } = render(<CreateForm />)

            expect(getByPlaceholderText('title')).toBeInTheDocument()
        })
    })

    describe('author textbox', () => {
        it('should show textbox label', () => {
            const { getByLabelText } = render(<CreateForm />)

            expect(getByLabelText('Author:')).toBeInTheDocument()
        })
        it('should show textbox', () => {
            const { getByPlaceholderText } = render(<CreateForm />)

            expect(getByPlaceholderText('author')).toBeInTheDocument()
        })
    })

    describe('body textbox', () => {
        it('should show textbox label', () => {
            const { getByLabelText } = render(<CreateForm />)

            expect(getByLabelText('Body:')).toBeInTheDocument()
        })
        it('should show textbox', () => {
            const { getByPlaceholderText } = render(<CreateForm />)

            expect(getByPlaceholderText('body')).toBeInTheDocument()
        })
    })
    describe('submit button', () => {
        it('should show a button', () => {
            const { getByRole } = render(<CreateForm />)

            expect(getByRole('button')).toBeInTheDocument()
        })
        it('should be clickable and submit form data', async () => {
            const { getByRole, getByPlaceholderText } = render(<CreateForm />)

            fireEvent.change(getByPlaceholderText('title'), {
                target: { value: 'placeholder title' },
            })
            fireEvent.change(getByPlaceholderText('author'), {
                target: { value: 'placeholder author' },
            })
            fireEvent.change(getByPlaceholderText('body'), {
                target: { value: 'placeholder body' },
            })
            fireEvent.click(getByRole('button'))

            await waitFor(() => {
                expect(global.fetch).toHaveBeenCalledWith('/api/news/create', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'placeholder title',
                        author: 'placeholder author',
                        body: 'placeholder body',
                    }),
                })
            })
        })
    })
})
