import React, { useContext } from 'react'
import { Input, Header, Icon } from 'semantic-ui-react'

import { NotesContext } from '_storage'

import CopyButton from './CopyButton'

const Backup = () => {
  const { notes } = useContext(NotesContext)
  const jsonString = JSON.stringify(notes)

  return (
    <>
      <Header as='h3' color='teal'>
        Backup your notes
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
      <Header as='h4'>Step 2: Paste to a new HackMD</Header>
      <p>
        <a href='https://hackmd.io/new' target='_blank'>
          <Icon name='external alternate' />
          New HackMD
        </a>
      </p>
    </>
  )
}

export default Backup
