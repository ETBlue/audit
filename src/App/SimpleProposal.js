import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, Grid, Icon } from 'semantic-ui-react'

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
