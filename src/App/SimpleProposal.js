import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Message, Menu, Grid, Icon } from 'semantic-ui-react'

import { NotesContext } from '_storage'
import { STATUSES } from 'App/config'

import { StyledContainer, Summary } from './Proposal'
import Meta from './Proposal/Meta'

const SimpleProposal = ({ proposal }) => {
  const { search } = useLocation()

  const summaryProps = {
    proposal,
    id: null,
    search
  }

  const { getNote } = useContext(NotesContext)
  const note = getNote(proposal.id)

  const statusInfo = STATUSES.find(s => s.key === note.status)
  const isUpToDate = proposal.version === note.version
  const isReviewed = Object.keys(note).some(key => !!note[key])

  return (
    <StyledContainer>
      <Grid stackable columns={3} key={proposal.id}>
        <Grid.Column width={4}>
          <Meta proposal={proposal} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Summary {...summaryProps} />
        </Grid.Column>
        <Grid.Column width={3}>
          {isReviewed && !isUpToDate && (
            <Message icon warning>
              <Icon name='exclamation triangle' color='yellow' />
              <Message.Content>Your review might be outdated</Message.Content>
            </Message>
          )}
          <Menu secondary vertical fluid>
            <Menu.Item color={statusInfo.color} active>
              <Icon name={statusInfo.icon} />
              {statusInfo.name}
            </Menu.Item>
          </Menu>
          <p className='info'>{note.memo}</p>
        </Grid.Column>
      </Grid>
    </StyledContainer>
  )
}

export default SimpleProposal
