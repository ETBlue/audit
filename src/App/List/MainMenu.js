import React, { useContext, useState } from 'react'
import { useLocation, useParams, Link, useHistory } from 'react-router-dom'
import { Segment, Menu, Input, Label, Icon, Button } from 'semantic-ui-react'
import queryString from 'query-string'
import styled from 'styled-components'

import { NotesContext } from '_storage'
import { DataContext } from '_proposal'
import { STATUSES, MAX_CONTENT_WIDTH } from 'App/config'
import { getLink } from './helpers'

const MainMenu = () => {
  const { status } = useParams()
  const { pathname, search } = useLocation()
  const history = useHistory()
  const { proposals } = useContext(DataContext)
  const { getNote } = useContext(NotesContext)
  const queries = queryString.parse(search)

  const [input, setInput] = useState(queries.search)
  const handleChange = (e, { value }) => {
    setInput(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const to = getLink({
      queries,
      name: 'search',
      value: input || undefined,
      pathname
    })
    history.push(to)
  }

  return (
    <StyledMenu>
      <Menu inverted borderless stackable color='teal'>
        <Menu.Item
          as={Link}
          to='/settings'
          active={pathname.includes('/settings')}
        >
          Audit Helper
        </Menu.Item>
        {STATUSES.map(s => (
          <Menu.Item
            key={s.name}
            as={Link}
            to={`/${s.key || ''}${search}`}
            active={!pathname.includes('/settings') && s.key === status}
          >
            {s.name}
            <Label>
              {proposals.filter(p => getNote(p.id)?.status === s.key)?.length}
            </Label>
          </Menu.Item>
        ))}
        <Menu.Menu as='form' onSubmit={handleSubmit} position='right'>
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
              <Button type='submit' color='teal' icon>
                <Icon name='search' />
              </Button>
            </Input>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={
              queries.layout === 'collapsed'
                ? getUrl({
                    queries,
                    pathname,
                    name: 'layout',
                    value: undefined
                  })
                : getUrl({
                    queries,
                    pathname,
                    name: 'layout',
                    value: 'collapsed'
                  })
            }
          >
            <Icon
              name={queries.layout === 'collapsed' ? 'list layout' : 'content'}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </StyledMenu>
  )
}

export default MainMenu

const getUrl = ({ queries, pathname, name, value }) => {
  const newQueries = { ...queries, [name]: value }
  return `${pathname}?${queryString.stringify(newQueries)}`
}

export const StyledMenu = styled(({ className, children }) => (
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
