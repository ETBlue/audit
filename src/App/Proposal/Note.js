import React, { useContext } from 'react'
import { Grid, Menu, Divider, Icon, Form } from 'semantic-ui-react'

import { NotesContext } from '_storage'
import { STATUSES, FACETS, HIGHLIGHTS } from 'App/config'

const Note = ({ proposal }) => {
  const { getNote, setNote } = useContext(NotesContext)
  const note = getNote(proposal.id)

  const handleChange = (e, { name, value, checked }) => {
    setNote({
      id: proposal.id,
      name,
      value: value || checked
    })
  }

  return (
    <Grid columns={2} stackable>
      <Grid.Column>
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
      <Grid.Column>
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
      </Grid.Column>
    </Grid>
  )
}

export default Note
