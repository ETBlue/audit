import React, { useContext, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { Segment, Menu, Input, Label, Icon, Button } from 'semantic-ui-react'
import queryString from 'query-string'
import styled from 'styled-components'

import { NotesContext } from '_storage'
import { DataContext } from '_api'
import { STATUSES, MAX_CONTENT_WIDTH } from 'App/config'
import { getLink } from './helpers'

const MainMenu = () => {
  const { status } = useParams()
  const { pathname, search } = useLocation()
  const { proposals } = useContext(DataContext)
  const { getNote } = useContext(NotesContext)
  const queries = queryString.parse(search)

  const [input, setInput] = useState(queries.search)
  const handleChange = (e, { value }) => {
    setInput(value)
  }

  return (
    <StyledMenu>
      <Menu inverted borderless color='teal'>
        <Menu.Item>Audit Helper</Menu.Item>
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
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              transparent
              inverted
              action
              placeholder='Search...'
              value={input || ''}
              onChange={handleChange}
            >
              <input />
              <Button
                type='submit'
                name='submit'
                color='teal'
                icon
                as={Link}
                to={getLink({
                  queries,
                  name: 'search',
                  value: input || undefined,
                  pathname
                })}
              >
                <Icon name='search' />
              </Button>
            </Input>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </StyledMenu>
  )
}

export default MainMenu

const StyledMenu = styled(({ className, children }) => (
  <Segment inverted basic color='teal' className={className}>
    {children}
  </Segment>
))`
  padding: 0 !important;

  & > .menu {
    width: 100%;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;

    .item .label {
      background: hsla(0, 0%, 0%, 0.1) !important;
      opacity: 0.5;
      .active & {
        opacity: 1;
      }
    }
  }
`
