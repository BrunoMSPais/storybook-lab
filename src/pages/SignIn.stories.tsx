import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'User logged in'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Type in your e-mail'), 'test@test.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('You are logged in')).toBeInTheDocument()
    })
  }
}