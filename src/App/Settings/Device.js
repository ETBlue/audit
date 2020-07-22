import React, { useContext, useState } from 'react'
import {
  Message,
  Button,
  Label,
  Input,
  Header,
  Segment,
  Divider
} from 'semantic-ui-react'

import { NotesContext } from '_storage'

import CopyButton from './CopyButton'

const Device = () => {
  const { notes, saveNotes } = useContext(NotesContext)
  const jsonString = JSON.stringify(notes)

  const [input, setInput] = useState('')
  const handleChange = e => {
    setInput(e.currentTarget.value)
  }
  const handleSave = () => {
    saveNotes(input)
  }

  return (
    <Segment padded='very' basic>
      <Header as='h3' color='teal'>
        Transfer your notes to another device
      </Header>
      <Header as='h4'>Step 1: Copy your notes to the clipboard</Header>
      <Input readOnly action>
        <input
          style={{ background: '#fafafa' }}
          className='code'
          value={jsonString}
        />
        <CopyButton string={jsonString} />
      </Input>
      <Header as='h4'>
        Step 2: Send your clipboard content to the target device
      </Header>
      <Header as='h4'>
        Step 3:{' '}
        <Label horizontal color='black'>
          on the target device
        </Label>{' '}
        open this web page
      </Header>
      <Header as='h4'>
        Step 4:{' '}
        <Label horizontal color='black'>
          on the target device
        </Label>{' '}
        paste your notes here and click on the button
      </Header>
      <Input action>
        <input
          className='code'
          placeholder='paste here...'
          value={input}
          onChange={handleChange}
        />
        <Button icon='save' onClick={handleSave} />
      </Input>
    </Segment>
  )
}

export default Device
