import React from 'react'
import { useLocation, useParams, Link, Redirect } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

import MainMenu from 'App/List/MainMenu'
import Backup from 'App/Settings/Backup'
import Device from 'App/Settings/Device'
import Convert from 'App/Settings/Convert'

const Settings = () => {
  const { pathname } = useLocation()
  const { action } = useParams()

  if (!MENU_ITEMS.some(item => item.key === action)) {
    return <Redirect to={'/settings/' + 'backup'} />
  }

  return (
    <>
      <MainMenu />
      <Container textAlign='center'>
        <Menu secondary widths={3}>
          {MENU_ITEMS.map(item => (
            <Menu.Item
              key={item.key}
              as={Link}
              to={`/settings/${item.key}`}
              active={pathname === `/settings/${item.key}`}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
        {action === 'backup' && <Backup />}
        {action === 'device' && <Device />}
        {action === 'convert' && <Convert />}
      </Container>
    </>
  )
}

export default Settings

const MENU_ITEMS = [
  { key: 'backup', name: 'Backup and recover' },
  { key: 'device', name: 'Switch between devices' },
  { key: 'convert', name: 'Convert to csv' }
]
