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
import Tags from '@yaireo/tagify/dist/react.tagify'
import '@yaireo/tagify/dist/tagify.css'

import { NotesContext } from '_storage'
import { STATUSES, FACETS, HIGHLIGHTS } from 'App/config'

const Note = ({ proposal, commentsVersion }) => {
  const { tags, getNote, setNote } = useContext(NotesContext)
  const note = getNote(proposal.id)

  const handleChange = (e, { name, value, checked }) => {
    setNote({
      id: proposal.id,
      name,
      value: value || checked,
      version: proposal.version,
      commentsVersion: commentsVersion
    })
  }

  const isUpToDate = proposal.version === note.version
  const isCommentsUpToDate = commentsVersion <= note.commentsVersion
  const isReviewed = Object.keys(note).some(key => !!note[key])

  const handleTagsChange = e => {
    setNote({
      id: proposal.id,
      name: 'tags',
      value: e.currentTarget.value
        ? JSON.parse(e.currentTarget.value).map(item => item.value.trim())
        : [],
      version: proposal.version,
      commentsVersion: commentsVersion
    })
  }

  return (
    <>
      {isReviewed && !isUpToDate && (
        <Message icon warning>
          <Icon name='exclamation triangle' color='yellow' />
          <Message.Content>Your review might be outdated</Message.Content>
        </Message>
      )}
      {isReviewed && !isCommentsUpToDate && (
        <Message icon warning>
          <Icon name='comment alternate' color='yellow' />
          <Message.Content>New comments arrival</Message.Content>
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
              placeholder={`Auditor's memo...`}
              onChange={handleChange}
            />
            <Tags
              placeholder='Track names...'
              whitelist={tags}
              dropdown={{ enabled: 0 }}
              value={note.tags.join(',')}
              onChange={handleTagsChange}
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
          <List>
            <List.Item>
              <Label horizontal>
                Current comments
                <Label.Detail as='code'>{commentsVersion}</Label.Detail>
              </Label>
            </List.Item>
            {isReviewed && (
              <List.Item>
                <Label horizontal>
                  Viewed comments
                  <Label.Detail as='code'>{note.commentsVersion}</Label.Detail>
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
