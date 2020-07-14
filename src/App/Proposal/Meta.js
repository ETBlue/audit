import React from 'react'
import { Label, List, Icon } from 'semantic-ui-react'

import { TOPICS, FORMATS, LICENSES } from 'App/config'

const Meta = ({ proposal }) => {
  const topic = TOPICS.find(item => item.key === proposal.topic)
  const format = FORMATS.find(item => item.key === proposal.format)
  const license = LICENSES.find(item => item.key === proposal.license)

  return (
    <>
      <List horizontal>
        {proposal.keywords &&
          proposal.keywords.map(w => (
            <Label key={w} horizontal>
              {w}
            </Label>
          ))}
      </List>
      <List>
        <List.Item>
          <Icon name='talk' />
          <List.Content>
            {topic.name}
            <br />
            {topic.name_en}
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name={format.icon} />
          <List.Content>
            {format.name}
            <br />
            {format.name_en}
          </List.Content>
        </List.Item>
        <List.Item>
          <Icon name='language' />
          <List.Content>{proposal.languages.join(', ')}</List.Content>
        </List.Item>
      </List>
      <List>
        <List.Item>
          <Icon name={license.icon} color={license.color} />
          <List.Content>
            {license.name}
            <br />
            {license.name_en}
          </List.Content>
        </List.Item>
      </List>
    </>
  )
}

export default Meta
