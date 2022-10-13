import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading' 

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Titulo h2',
    size: 'md'
  },
  argTypes: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'inline-radio'
    }
  },
} as Meta<HeadingProps>

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  },
}

export const Default: StoryObj<HeadingProps> = {
//  ja é md por padrão
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  },
}

export const CustomTagComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: ( 
      <h1>Este é um H1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    asChild: {
      table: {
        disable: false
      }
    },
  }
}