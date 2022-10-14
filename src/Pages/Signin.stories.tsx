import { Meta } from '@storybook/react'
import {Signin} from './Signin' 

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
  argTypes: {},
} as Meta

// export const Default: StoryObj = {
//   play: async ({ canvasElement }) => {
//     const canvas =within(canvasElement)

//     userEvent.type(canvas.getByPlaceholderText('example.email.com'), 'delgado.elaine@gmail.com')
//     userEvent.type(canvas.getByPlaceholderText('********'), '12345678')
//     userEvent.click(canvas.getByRole('button'))

//      await waitFor(() => {
//        return expect(canvas.getByText('Login realizado')).toBeInTheDocument()
//     })   
//   }
// }