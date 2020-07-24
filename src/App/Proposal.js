import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { Header, Divider, Grid, Icon, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from 'App/config'

import Meta from './Proposal/Meta'
import Speakers from './Proposal/Speakers'
import Note from './Proposal/Note'
import Comments from './Proposal/Comments'

const Proposal = ({ proposal }) => {
  const { id } = useParams()
  const { search } = useLocation()

  const summaryProps = {
    proposal,
    id,
    search
  }

  return (
    <StyledContainer>
      <Grid stackable columns={3} key={proposal.id}>
        <Grid.Column width={3}>
          <Meta proposal={proposal} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Summary {...summaryProps} />
          <Divider />
          <Speakers speakers={proposal.speakers} />
          <Divider />
          <Comments id={proposal.id} />
        </Grid.Column>
        <Grid.Column width={7}>
          <Note proposal={proposal} />
        </Grid.Column>
      </Grid>
    </StyledContainer>
  )
}

export default Proposal

export const Summary = ({ proposal, id, search }) => (
  <>
    <Header as='h3'>
      {!id && (
        <Button
          basic
          icon
          className='borderless'
          as={Link}
          to={`/proposal/${proposal.id}${search}`}
          floated='right'
        >
          <Icon name='right chevron' />
        </Button>
      )}
      <a href={proposal.url} target='_blank' rel='noopener noreferrer'>
        {proposal.title}
      </a>
      <Header.Subheader>{proposal.title_en}</Header.Subheader>
    </Header>
    {proposal.related_url && (
      <p>
        <a
          href={proposal.related_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Related URL
          {` `}
          <Icon name='linkify' size='small' />
        </a>
      </p>
    )}
    <p>{proposal.summary}</p>
    <p>{proposal.summary_en}</p>
  </>
)

export const StyledContainer = styled.section`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  padding: 0 1rem;

  .grid > .column .menu {
    margin-left: 0;
  }

  .ui.header .button {
    font-size: 1rem;
    margin-top: -0.4em;
    padding: 0.785714em;
  }

  .action .ui.button {
    margin-top: -0.6rem;
  }

  .ui.comments .comment {
    border-top: 1px dashed rgba(34, 36, 38, 0.15);

    &:first-child {
      border-top: none;
    }

    .info.title {
      float: right;
    }

    .emoji {
      height: 1.5em;
      margin: -0.25em 0;
      display: inline-block;
    }

    .js-lazyYT.lazyYT-container {
      width: 100% !important;
    }
  }
`
