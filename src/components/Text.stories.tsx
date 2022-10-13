import { Meta, StoryObj } from '@storybook/react'
import {Text, TextProps } from './Text' 

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md'
  },
  argTypes: {
    options: ['sm', 'md', 'lg'],
    control: {
      type: 'inline-radio'
    }
  },
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  },
}

export const Default: StoryObj<TextProps> = {
//  ja é md por padrão
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  },
}

export const CustomTagComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: ( 
      <p>Lorem Ipsum2</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}