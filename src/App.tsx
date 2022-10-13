import { Envelope } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App() {
  return (
    <div style={{ backgroundColor: '#364041'}}>
      <Heading>Title</Heading>
      <Text>Text</Text>
      <Button>Button</Button>
      <TextInput.Root>
        <TextInput.Icon>
            <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder='Digite seu e-mail' />
      </TextInput.Root>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Checkbox />
        <Text size='sm'>Lembrar de mim por 30 dias.</Text>
      </div>
    </div>
  )
}
