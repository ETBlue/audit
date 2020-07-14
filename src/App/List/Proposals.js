import React, { useContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import styled from 'styled-components'
import queryString from 'query-string'
import { chunk } from 'lodash'

import { DataContext } from '_api'
import { NotesContext } from '_storage'
import { PROPOSAL_COUNT_PER_PAGE } from 'App/config'

import PageMenu from 'App/List/PageMenu'
import Proposal from 'App/Proposal'

const Proposals = () => {
  const { status } = useParams()
  const { search } = useLocation()
  const queries = queryString.parse(search)
  const { proposals } = useContext(DataContext)
  const { getNote } = useContext(NotesContext)
  const matchedProposals = proposals.filter(p =>
    isProposalListed({
      proposal: p,
      note: getNote(p.id),
      status,
      queries
    })
  )

  const pages = chunk(matchedProposals, PROPOSAL_COUNT_PER_PAGE)
  const listedProposals = pages[queries.page - 1 || 0]

  return (
    <>
      <PageMenu pages={pages} />
      <Info>{matchedProposals.length} proposals found</Info>
      {listedProposals?.map(p => (
        <React.Fragment key={p.id}>
          <Divider section />
          <Proposal proposal={p} />
        </React.Fragment>
      )) || null}
      <Divider />
      <PageMenu pages={pages} />
      <Divider hidden />
    </>
  )
}

export default Proposals

const isProposalListed = ({ proposal, note, status, queries }) => {
  const properties = ['topic', 'format', 'license']
  for (const p of properties) {
    if (queries[p] && proposal[p] !== queries[p]) return false
  }

  if (note.status !== status) return false

  if (queries.facet && !note[queries.facet]) return false

  if (queries.highlight && !note[queries.highlight]) return false

  if (queries.search && !JSON.stringify(proposal).includes(queries.search))
    return false

  return true
}

const Info = styled.p`
  text-align: center;
  margin: 0.5rem 0;
  font-size: 0.85rem;
  opacity: 0.7;
`
