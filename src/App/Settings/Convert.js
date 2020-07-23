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

import { FACETS, HIGHLIGHTS } from 'App/config'

import CopyButton from './CopyButton'

const Convert = () => {
  const { proposals } = useContext(DataContext)
  const { notes } = useContext(NotesContext)
  const { sheet, fetchSheet, handleFetchDone } = useContext(SheetContext)

  const [fetchError, setFetchError] = useState(true)
  const handleSuccess = result => {
    setFetchError(false)
    handleFetchDone(result)
  }
  const handleError = () => {
    setFetchError(true)
  }
  const handleRetry = () => {
    fetchSheet(handleFetchDone, handleError)
  }
  useEffect(() => {
    if (sheet.length === 0) {
      fetchSheet(handleSuccess, handleError)
    }
  }, [])

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
        Share your notes to the team sheet
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
          <Button color='yellow' onClick={handleRetry}>
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

const getScore = status => {
  if (status === 'yes') return 3
  if (status === 'no') return 1
  if (status === 'unsure') return 2
  return ''
}

const getFacets = note => {
  const activeFacets = FACETS.filter(item => note[item.key]).map(
    item => item.name
  )
  return activeFacets.length > 0 ? `面向：${activeFacets.join('、')}` : null
}

const getHighLights = note => {
  const activeHighlights = HIGHLIGHTS.filter(item => note[item.key]).map(
    item => item.name
  )
  return activeHighlights.length > 0
    ? `加分：${activeHighlights.join('、')}`
    : null
}

const getSharedNote = note => {
  return {
    score: getScore(note.status),
    notes: [note.memo || '', getFacets(note), getHighLights(note)]
      .filter(item => !!item)
      .join('；')
  }
}
