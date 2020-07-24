import React, { useContext, useState } from 'react'
import moment from 'moment'
import {
  Label,
  Button,
  Input,
  Header,
  Icon,
  Divider,
  Message,
  Segment
} from 'semantic-ui-react'

import { NotesContext } from '_storage'

import CopyButton from './CopyButton'

const Backup = () => {
  const { notes, saveNotes } = useContext(NotesContext)
  const jsonString = JSON.stringify(notes)
  const mdString = `# Audit Helper backup ${moment().format('YYYY-MM-DD')}

  ${jsonString}
  `

  const [input, setInput] = useState('')
  const handleChange = e => {
    setInput(e.currentTarget.value)
  }
  const handleSave = () => {
    saveNotes(input)
  }

  return (
    <>
      <Segment padded='very' basic>
        <Header as='h3' color='teal'>
          Backup your notes
        </Header>
        <Header as='h4'>Step 1: Copy your notes to the clipboard</Header>
        <Input readOnly action>
          <input
            style={{ background: '#fafafa' }}
            className='code'
            value={mdString}
          />
          <CopyButton string={mdString} />
        </Input>
        <Header as='h4'>Step 2: Paste to a new HackMD</Header>
        <p>
          <a
            href='https://hackmd.io/new'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='external alternate' />
            New HackMD
          </a>
        </p>
      </Segment>
      <Message attached='top' error>
        Danger zone below
      </Message>
      <Segment padded='very' color='red' secondary attached>
        <Header as='h3' color='teal'>
          Recover your notes
        </Header>
        <Header as='h4'>
          Step 1:{' '}
          <Label horizontal color='black'>
            in HackMD
          </Label>{' '}
          Copy your notes to the clipboard
        </Header>
        <Header as='h4'>
          Step 2: Paste your notes here and click on the button
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
      <Message attached='bottom' error>
        Warning: You are going to overite your notes. This action can't be
        undone.
      </Message>
      <Divider hidden />
    </>
  )
}

export default Backup
