import React from 'react'
import { Item, Icon } from 'semantic-ui-react'

const Speakers = ({ speakers }) => (
  <Item.Group divided>
    {speakers.map(s => (
      <Item key={s.display_name}>
        <Item.Image rounded size='tiny' src={s.avatar_url} />
        <Item.Content>
          {s.info_url ? (
            <Item.Header
              size='tiny'
              as='a'
              href={s.info_url}
              target='_blank'
              rel='noopener noreferrer'
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
)

export default Speakers
