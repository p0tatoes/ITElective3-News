import CreateForm from '@/components/CreateForm'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

global.fetch = jest.fn()

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
        it('should be clickable', () => {
            const { getByRole } = render(<CreateForm />)

            fireEvent.click(getByRole('button'))

            expect(global.fetch).toBeCalled()

            global.fetch.mockClear()
            delete global.fetch
        })
    })
})
