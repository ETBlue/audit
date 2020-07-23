import React, { useContext } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { Menu, Icon, Divider } from 'semantic-ui-react'

import { DataContext } from '_proposal'
import { NotesContext } from '_storage'

import Proposal from 'App/Proposal'

import { StyledMenu } from 'App/List/MainMenu'

const Instance = () => {
  const { id } = useParams()
  const { proposals } = useContext(DataContext)
  const proposal = proposals.find(p => p.id === id)

  const { getNote } = useContext(NotesContext)
  const { status } = getNote(id)

  const { search } = useLocation()
  const backUrl = `/${status || ''}${search}`

  if (!proposal) return null

  return (
    <>
      <StyledMenu>
        <Menu inverted borderless stackable color='teal'>
          <Menu.Item as={Link} to={backUrl}>
            <Icon name='left chevron' />
            Back
          </Menu.Item>
        </Menu>
      </StyledMenu>
      <Divider hidden />
      <Proposal proposal={proposal} />
    </>
  )
}

export default Instance
