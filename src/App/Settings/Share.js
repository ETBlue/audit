import React, { useContext } from 'react'
import { Label, Input, Header, Segment } from 'semantic-ui-react'

import { DataContext } from '_proposal'
import { NotesContext } from '_storage'
import { getCsv } from '_gsheet/helpers'

import { getSharedNote } from './helpers'

import CopyButton from './CopyButton'

import { getTopic, getFormat, getLicense } from 'App/Proposal/helpers'

const Share = () => {
  const { proposals } = useContext(DataContext)
  const { notes } = useContext(NotesContext)

  const sharedNotes = proposals.map(proposal => {
    const note = notes[proposal.id] || {}
    const { title, title_en, keywords, languages, url } = proposal
    return {
      ...getSharedNote(note),
      title,
      title_en,
      topic: getTopic(proposal.topic).name,
      format: getFormat(proposal.format).name,
      license: getLicense(proposal.license).name,
      keywords: keywords.join(' / '),
      languages: languages.join(' / '),
      url
    }
  })

  const csvNotes = getCsv(sharedNotes)

  return (
    <Segment padded='very' basic>
      <Header as='h3' color='teal'>
        Share your notes with gsheet
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
      <Header as='h4'>
        Step 2: Open your working gsheet and paste the csv string into it
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
      <Header as='h4'>Step 5: Share the gsheet to your coworkers</Header>
    </Segment>
  )
}

export default Share
