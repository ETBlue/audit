import React from 'react'
import { Header, Divider, Grid, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Meta from './Meta'
import Speakers from './Speakers'
import Note from './Note'

const Proposal = ({ proposal }) => {
  return (
    <StyledContainer>
      <Grid stackable columns={3} key={proposal.id}>
        <Grid.Column width={4}>
          <Meta proposal={proposal} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as='h3'>
            <a href={proposal.url} target='_blank'>
              {proposal.title}
            </a>
            <Header.Subheader>{proposal.title_en}</Header.Subheader>
          </Header>
          {proposal.related_url && (
            <p>
              <a href={proposal.related_url} target='_blank'>
                Related URL
                {` `}
                <Icon name='linkify' size='small' />
              </a>
            </p>
          )}
          <p>{proposal.summary}</p>
          <p>{proposal.summary_en}</p>
          <Divider />
          <Speakers speakers={proposal.speakers} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Note proposal={proposal} />
        </Grid.Column>
      </Grid>
    </StyledContainer>
  )
}

export default Proposal

const StyledContainer = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1rem;

  .grid > .column:first-child {
    padding-left: 2rem !important;

    .menu {
      margin-left: 1rem;
    }
  }
`
