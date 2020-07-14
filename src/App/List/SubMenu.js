import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import queryString from 'query-string'
import styled from 'styled-components'

import {
  MAX_CONTENT_WIDTH,
  TOPICS,
  FORMATS,
  LICENSES,
  FACETS,
  HIGHLIGHTS
} from 'App/config'
import { getLink } from './helpers'

const MENUS = [
  { configs: TOPICS, type: 'topic' },
  { configs: FORMATS, type: 'format' },
  { configs: LICENSES, type: 'license' },
  { configs: FACETS, type: 'facet' },
  { configs: HIGHLIGHTS, type: 'highlight' }
]

const SubMenu = () => {
  const { pathname, search } = useLocation()
  const queries = queryString.parse(search)

  return (
    <StyledContainer>
      <Menu secondary widths={5}>
        {MENUS.map(({ type, configs }) => (
          <Dropdown
            key={type}
            item
            className={!!queries[type] ? 'active' : ''}
            text={
              getActive({ queries, type, configs })?.name_en || `All ${type}s`
            }
          >
            <Dropdown.Menu>
              {configs.map(item => (
                <Dropdown.Item
                  key={item.name}
                  as={Link}
                  to={getLink({
                    queries,
                    pathname,
                    name: type,
                    value: item.key
                  })}
                >
                  {item.name}
                  <p>{item.name_en} </p>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ))}
      </Menu>
    </StyledContainer>
  )
}

export default SubMenu

const getActive = ({ queries, type, configs }) => {
  return configs.find(item => item.key === queries[type])
}

const StyledContainer = styled.nav`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 1rem auto;
`
