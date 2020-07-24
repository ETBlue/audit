import React, { useState, useEffect, useContext } from 'react'
import {
  Icon,
  Button,
  Label,
  Input,
  Header,
  Segment,
  Message
} from 'semantic-ui-react'

import { DataContext } from '_proposal'
import { NotesContext } from '_storage'
import { SheetContext } from '_gsheet'
import { getCsv } from '_gsheet/helpers'

import { getSharedNote } from './helpers'

import CopyButton from './CopyButton'

const Convert = () => {
  const { proposals } = useContext(DataContext)
  const { notes } = useContext(NotesContext)
  const { sheet, fetchSheet, handleFetchDone } = useContext(SheetContext)

  const [fetchError, setFetchError] = useState(false)
  const [buttonState, setButtonState] = useState('')
  const handleSuccess = result => {
    setButtonState('')
    setFetchError(false)
    handleFetchDone(result)
  }
  const handleError = () => {
    setButtonState('')
    setFetchError(true)
  }
  const handleRetry = () => {
    setButtonState('loading')
    fetchSheet(handleSuccess, handleError)
  }
  useEffect(() => {
    if (sheet.length === 0) {
      fetchSheet(handleSuccess, handleError)
    }
  }, [sheet.length])

  const sharedNotes = sheet.map(row => {
    const proposal = proposals.find(
      p => p.title === row.title || p.title_en === row.title_en
    )
    if (proposal) {
      const note = notes[proposal.id] || {}
      return { ...getSharedNote(note), ...row }
    } else {
      return {}
    }
  })

  const csvNotes = getCsv(sharedNotes)

  return (
    <Segment padded='very' basic>
      <Header as='h3' color='teal'>
        Share your notes to the team sheet (obsolete)
      </Header>
      <Header as='h4'>
        Step 1: Copy the following csv string to the clipboard
      </Header>
      <Input readOnly action>
        <input
          style={{ background: '#fafafa' }}
          className='code'
          value={csvNotes}
        />
        <CopyButton string={csvNotes} />
      </Input>
      {fetchError && (
        <Message warning>
          <p>Error: importJSON still working.</p>
          <Button color='yellow' onClick={handleRetry} className={buttonState}>
            <Icon name='refresh' />
            retry
          </Button>
        </Message>
      )}
      <Header as='h4'>
        Step 2: Open a blank gsheet and paste the csv string into it
      </Header>
      <Header as='h4'>
        Step 3:{' '}
        <Label horizontal color='black'>
          in gsheet
        </Label>{' '}
        select Data > Split text to columns
      </Header>
      <Header as='h4'>
        Step 4:{' '}
        <Label horizontal color='black'>
          in gsheet
        </Label>{' '}
        set the seperator as{' '}
        <Label horizontal className='code'>
          ,
        </Label>
      </Header>
      <Header as='h4'>
        Step 5:{' '}
        <Label horizontal color='black'>
          in gsheet
        </Label>{' '}
        Copy the columns you need and paste to the team sheet
      </Header>
    </Segment>
  )
}

export default Convert
