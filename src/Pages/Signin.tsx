import React from 'react'
import { Checkbox } from "@radix-ui/react-checkbox"
import { Envelope, LockKey } from "phosphor-react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { TextInput } from "../components/TextInput"
import { Text } from "../components/Text"
import { Logo } from "../Logo"
import { FormEvent } from "react"

export const Signin = () => {
  const [isUserSignedIn, setIsUserSignedIn] = React.useState(false)

  const handleSignin = (event: FormEvent) => {
    event.preventDefault()

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen p-4 bg-gray-900 flex flex-col items-center justify-center text-gray-100' >
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>

          <Text size='lg' className='text-gray-400 mt-1'>
            Faça login e comece a usar
          </Text>
        </header>
        <form onSubmit={handleSignin} className='flex flex-col items-stretch w-full max-w-xs mt-10 gap-4'>
          { isUserSignedIn && 
            <Text>Login realizado</Text>
          }
          <label htmlFor="email" className='flex flex-col gap-2'>
            <Text className='font-semibold'>Digite seu e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type='email' id='email' placeholder='example.email.com'/>
            </TextInput.Root>
          </label>
          <label htmlFor='password'className='flex flex-col gap-2'>
            <Text className='font-semibold'>Digite sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <LockKey  />
              </TextInput.Icon>
              <TextInput.Input type='password' id='password' placeholder='********'/>
            </TextInput.Root>
          </label>

          <label htmlFor='remember' className='flex items-center gap-2 cursor-pointer'>
            <Checkbox  id='remember'/>
            <Text className='text-gray-200' size='sm'>
              Lembrar de mim por 30 dias
            </Text>
          </label>
          <Button type='submit' className='mt-4'>
            Entrar na plataforma
          </Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href='#' className='text-gray-400 underline hover:text-gray-200'>
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild size='sm'>
            <a href='#' className='text-gray-400 underline hover:text-gray-200'>
              Ainda não possui uma conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </div>
  )
}

function useSate() {
  throw new Error("Function not implemented.")
}