import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import queryString from 'query-string'

import { getLink } from './helpers'

const PageMenu = ({ pages }) => {
  const { pathname, search } = useLocation()
  const queries = queryString.parse(search)

  return (
    <Container textAlign='center'>
      <Menu pagination borderless stackable>
        {pages.map((p, index) => (
          <Menu.Item
            as={Link}
            to={getLink({
              queries,
              pathname,
              name: 'page',
              value: index === 0 ? undefined : index + 1
            })}
            key={index + 1}
            active={
              index + 1 === parseInt(queries.page) ||
              (index === 0 && !queries.page)
            }
          >
            {index + 1}
          </Menu.Item>
        ))}
        {pages.length === 0 && (
          <Menu.Item active disabled>
            0
          </Menu.Item>
        )}
      </Menu>
    </Container>
  )
}

export default PageMenu
