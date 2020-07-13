import React from 'react'
import { Header, Menu, Divider, Grid, Item, Icon } from 'semantic-ui-react'

import { useNotes } from '_storage'
import { STATUSES } from 'App/config'

const Proposal = ({ proposal }) => {
  const { getNote, setNote } = useNotes()
  const note = getNote(proposal.id)

  const handleClick = (e, { name, value }) => {
    setNote({
      id: proposal.id,
      name,
      value
    })
  }

  return (
    <Grid stackable columns={3} key={proposal.id}>
      <Grid.Column width={4}>
        <Menu vertical secondary style={{ margin: '0 1rem' }}>
          {STATUSES.map(s => (
            <Menu.Item
              key={s.key || ''}
              name='status'
              value={s.key}
              active={note.status === s.key}
              onClick={handleClick}
            >
              {s.name}
            </Menu.Item>
          ))}
        </Menu>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h3'>
          <a href={proposal.url} target='_blank'>
            {proposal.title}
          </a>
          <Header.Subheader>{proposal.title_en}</Header.Subheader>
        </Header>
        <p>{proposal.summary}</p>
        <p>{proposal.summary_en}</p>
        {proposal.related_url && (
          <a href={proposal.related_url} target='_blank'>
            Related URL
            {` `}
            <Icon name='linkify' size='small' />
          </a>
        )}
        <Divider />
        <Item.Group divided>
          {proposal.speakers.map(s => (
            <Item key={s.display_name}>
              <Item.Image rounded size='tiny' src={s.avatar_url} />
              <Item.Content>
                {s.info_url ? (
                  <Item.Header
                    size='tiny'
                    as='a'
                    href={s.info_url}
                    target='_blank'
                  >
                    {s.display_name}
                    {` `}
                    <Icon name='linkify' size='small' />
                  </Item.Header>
                ) : (
                  <Item.Header size='small'>{s.display_name}</Item.Header>
                )}
                <Item.Meta>
                  <Icon name='map marker alternate' />
                  {` `}
                  {s.city}
                </Item.Meta>
                <Item.Meta>
                  <Icon name='building' />
                  {` `}
                  {s.organization}
                </Item.Meta>
                <Item.Description>{s.bio}</Item.Description>
                <Item.Description>{s.bio_en}</Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Grid.Column>
      <Grid.Column width={4}>{proposal.license}</Grid.Column>
    </Grid>
  )
}

export default Proposal
