import { UpdateForm } from '@/components/UpdateForm'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'

global.fetch = jest.fn()

beforeEach(() => {
    jest.clearAllMocks()
})

afterAll(() => {
    jest.clearAllMocks()
})

describe('Update News Form', () => {
    describe('title textbox', () => {
        it('should show the textbox and have pre-loaded values', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            expect(getByPlaceholderText('Title')).toBeInTheDocument()
            expect(getByPlaceholderText('Title')).toHaveDisplayValue(
                'Placeholder'
            )
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
        it('should show the textbox and have pre-loaded values', () => {
            const { getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title='Placeholder'
                    body='Lorem Ipsum'
                />
            )

            expect(getByPlaceholderText('Body')).toBeInTheDocument()
            expect(getByPlaceholderText('Body')).toHaveDisplayValue(
                'Lorem Ipsum'
            )
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

        it('should be clickable and submit form data', async () => {
            delete window.location
            window.location = { assign: jest.fn() }

            const { getByRole, getByPlaceholderText } = render(
                <UpdateForm
                    id='0'
                    title=''
                    body=''
                />
            )

            fireEvent.change(getByPlaceholderText('Title'), {
                target: { value: 'Random Title' },
            })
            fireEvent.change(getByPlaceholderText('Body'), {
                target: { value: 'Lorem ipsum dolor sit amet' },
            })
            fireEvent.click(getByRole('button'))

            await waitFor(() => {
                expect(global.fetch).toHaveBeenCalledWith(
                    '/api/news/update/0',
                    {
                        method: 'PATCH',
                        body: JSON.stringify({
                            title: 'Random Title',
                            body: 'Lorem ipsum dolor sit amet',
                        }),
                    }
                )
            })
        })
    })
})
