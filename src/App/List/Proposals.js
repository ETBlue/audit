import React, { useContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import queryString from 'query-string'
import { chunk } from 'lodash'

import { DataContext } from '_proposal'
import { NotesContext } from '_storage'
import { PROPOSAL_COUNT_PER_PAGE } from 'App/config'

import PageMenu from 'App/List/PageMenu'
import Proposal from 'App/Proposal'
import SimpleProposal from 'App/SimpleProposal'

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
      <p className='center aligned info' style={{ marginTop: '0.5rem' }}>
        {matchedProposals.length} proposals found
      </p>
      {listedProposals?.map(p => (
        <React.Fragment key={p.id}>
          <Divider section />
          {queries.layout === 'collapsed' ? (
            <SimpleProposal proposal={p} />
          ) : (
            <Proposal proposal={p} />
          )}
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
  if (note.status !== status) return false

  const properties = ['topic', 'license']
  for (const p of properties) {
    if (queries[p] && proposal[p] !== queries[p]) return false
  }

  if (queries.format && !proposal.format?.includes(queries.format)) return false

  if (queries.facet && !note[queries.facet]) return false

  if (queries.highlight && !note[queries.highlight]) return false

  if (queries.track && !note.tags.includes(queries.track)) return false

  if (queries.search) {
    const regex = new RegExp(queries.search, 'i')
    return !!JSON.stringify(proposal).match(regex)
  }

  return true
}
