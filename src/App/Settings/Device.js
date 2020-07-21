import React, { useContext, useState } from 'react'
import { Button, Label, Input, Header, Icon } from 'semantic-ui-react'

import { NotesContext } from '_storage'

import CopyButton from './CopyButton'

const Device = () => {
  const { notes, saveNotes } = useContext(NotesContext)
  const jsonString = JSON.stringify(notes)

  const [input, setInput] = useState('')
  const handleChange = (e, { value }) => {
    setInput(value)
  }
  const handleSave = () => {
    saveNotes(input)
  }

  return (
    <>
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
        Step 3: <Label horizontal>on the target device</Label> open this web
        page
      </Header>
      <Header as='h4'>
        Step 4: <Label horizontal>on the target device</Label> paste your notes
        here
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
    </>
  )
}

export default Device
