import React, { useContext } from 'react'
import { Menu, Divider, Icon, Form } from 'semantic-ui-react'

import { NotesContext } from '_storage'
import { STATUSES, FACETS, HIGHLIGHTS } from 'App/config'

const Note = ({ proposal }) => {
  const { getNote, setNote } = useContext(NotesContext)
  const note = getNote(proposal.id)
  const handleClick = (e, { name, value, checked }) => {
    setNote({
      id: proposal.id,
      name,
      value: value || checked
    })
  }

  return (
    <>
      <Menu secondary vertical>
        {STATUSES.map(s => (
          <Menu.Item
            key={s.key || ''}
            name='status'
            value={s.key}
            color={s.color}
            active={note.status === s.key}
            onClick={handleClick}
          >
            <Icon name={s.icon} />
            {s.name}
          </Menu.Item>
        ))}
      </Menu>
      <Divider />
      <Form>
        {FACETS.map(
          item =>
            item.key && (
              <Form.Checkbox
                key={item.key}
                label={`${item.name} ${item.name_en}`}
                name={item.key}
                checked={note[item.key]}
                onChange={handleClick}
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
                onChange={handleClick}
              />
            )
        )}
      </Form>
    </>
  )
}

export default Note
