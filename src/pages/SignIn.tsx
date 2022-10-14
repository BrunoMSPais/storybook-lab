import axios from 'axios'
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import '../styles/global.css'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'test@test.com',
      password: '123456'
    })

    setIsUserSignedIn(true)
  }

  return(
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4 text-center'>
          Storybook Lab
        </Heading>
        <small className='text-xxs font-thin text-gray-400'>* Built with React & Storybook using Vite</small>
        <Text size='lg' className='text-gray-400 mt-1'>Login and start using!</Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
        { isUserSignedIn && <Text>You are logged in</Text>}

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input id='email' type={'email'}  placeholder='Type in your e-mail'/>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>

            <TextInput.Input id='password' type={'password'} placeholder='******'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember'className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm'>Remember me for 30 days</Text>
        </label>

        <Button type='submit' className='mt-4'>Go inside</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200 focus:text-gray-200 outline-none'>Forgot your password?</a>
        </Text>

        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200 focus:text-gray-200 outline-none'>Don't have an account? <strong>Get one now!</strong></a>
        </Text>
      </footer>
    </div>
  )
}