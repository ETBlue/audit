import React, { useContext, useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { Menu, Label } from 'semantic-ui-react'
import styled from 'styled-components'

import { DataContext } from '_api'
import { useNotes, NotesContext } from '_storage'
import { STATUSES } from 'App/config'

const MainMenu = () => {
  const { status } = useParams()
  const { search } = useLocation()
  const { getNote } = useNotes()
  const proposals = useContext(DataContext)
  const notes = useContext(NotesContext)
  useEffect(() => {}, [notes])

  return (
    <StyledMenu>
      <Menu.Item>Proposal Auditor</Menu.Item>
      {STATUSES.map(s => (
        <Menu.Item
          key={s.name}
          as={Link}
          to={`/${s.key || ''}${search}`}
          active={s.key === status}
        >
          {s.name}
          <Label>
            {proposals.filter(p => getNote(p.id)?.status === s.key)?.length}
          </Label>
        </Menu.Item>
      ))}
    </StyledMenu>
  )
}

export default MainMenu

const StyledMenu = styled(({ className, children }) => (
  <Menu inverted borderless color='teal' className={className}>
    {children}
  </Menu>
))`
  border-radius: 0 !important;
  .item .label {
    background: hsla(0, 0%, 0%, 0.1) !important;
    opacity: 0.5;
    .active & {
      opacity: 1;
    }
  }
`
