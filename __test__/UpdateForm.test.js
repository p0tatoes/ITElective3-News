import { UpdateForm } from '@/components/UpdateForm'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

describe('Update News Form', () => {
    describe('title textbox', () => {
        it('should show the textbox', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            expect(getByPlaceholderText('Title')).toBeInTheDocument()
        })

        it('should be able to be typed on', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            fireEvent.change(getByPlaceholderText('Title'), {
                target: { value: 'Not Placeholder' },
            })

            expect(getByPlaceholderText('Title')).toHaveDisplayValue(
                'Not Placeholder'
            )
        })
    })

    describe('body textbox', () => {
        it('should show the textbox', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            expect(getByPlaceholderText('Body')).toBeInTheDocument()
        })

        it('should be able to be typed on', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            fireEvent.change(getByPlaceholderText('Body'), {
                target: { value: 'Not Lorem Ipsum' },
            })

            expect(getByPlaceholderText('Body')).toHaveDisplayValue(
                'Not Lorem Ipsum'
            )
        })
    })
    describe('Submit Button', () => {
        it('should show the button', () => {
            const { getByRole } = render(<UpdateForm />)

            expect(getByRole('button')).toBeInTheDocument()
        })

        it('should be clickable', () => {
            global.fetch = jest.fn()

            const { getByRole } = render(<UpdateForm />)

            fireEvent.click(getByRole('button'))

            expect(global.fetch).toHaveBeenCalled()

            global.fetch.mockClear()
            delete global.fetch
        })
    })
})
