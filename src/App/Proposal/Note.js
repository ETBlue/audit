import React, { useContext } from 'react'
import {
  Message,
  Label,
  List,
  Grid,
  Menu,
  Divider,
  Icon,
  Form
} from 'semantic-ui-react'

import { NotesContext } from '_storage'
import { STATUSES, FACETS, HIGHLIGHTS } from 'App/config'

const Note = ({ proposal }) => {
  const { getNote, setNote } = useContext(NotesContext)
  const note = getNote(proposal.id)

  const handleChange = (e, { name, value, checked }) => {
    setNote({
      id: proposal.id,
      name,
      value: value || checked,
      version: proposal.version
    })
  }

  const isUpToDate = proposal.version === note.version
  const isReviewed = Object.keys(note).some(key => !!note[key])

  return (
    <>
      {isReviewed && !isUpToDate && (
        <Message icon warning>
          <Icon name='exclamation triangle yellow' />
          <Message.Content>Your review might be outdated</Message.Content>
        </Message>
      )}

      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          <Form>
            {FACETS.map(
              item =>
                item.key && (
                  <Form.Checkbox
                    key={item.key}
                    label={`${item.name} ${item.name_en}`}
                    name={item.key}
                    checked={note[item.key]}
                    onChange={handleChange}
                  />
                )
            )}
          </Form>
          <Divider />
          <Form>
            {HIGHLIGHTS.map(
              item =>
                item.key && (
                  <Form.Checkbox
                    key={item.key}
                    label={`${item.name} ${item.name_en}`}
                    name={item.key}
                    checked={note[item.key]}
                    onChange={handleChange}
                  />
                )
            )}
          </Form>
        </Grid.Column>
        <Grid.Column width={6}>
          <Menu secondary vertical fluid>
            {STATUSES.map(s => (
              <Menu.Item
                key={s.key || ''}
                name='status'
                value={s.key}
                color={s.color}
                active={note.status === s.key}
                onClick={handleChange}
              >
                <Icon name={s.icon} />
                {s.name}
              </Menu.Item>
            ))}
          </Menu>
          <Divider />
          <Form>
            <Form.TextArea
              name='memo'
              value={note.memo || ''}
              placeholder={`Auditor\'s memo...`}
              onChange={handleChange}
            />
          </Form>
          <List>
            <List.Item>
              <Label horizontal>
                Current version
                <Label.Detail as='code'>{proposal.version}</Label.Detail>
              </Label>
            </List.Item>
            {isReviewed && (
              <List.Item>
                <Label horizontal>
                  Reviewed version
                  <Label.Detail as='code'>{note.version}</Label.Detail>
                </Label>
              </List.Item>
            )}
          </List>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Note
