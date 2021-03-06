import { FACETS, HIGHLIGHTS } from 'App/config'

const getScore = status => {
  if (status === 'hellyes') return '3+'
  if (status === 'yes') return 3
  if (status === 'no') return 1
  if (status === 'unsure') return 2
  if (status === 'skipped') return 'skipped'
  if (status === 'wip') return 'wip'
  return ''
}

const getFacets = note => {
  const activeFacets = FACETS.filter(item => note[item.key]).map(
    item => item.name
  )
  return activeFacets.length > 0 ? `面向：${activeFacets.join('、')}` : null
}

const getHighLights = note => {
  const activeHighlights = HIGHLIGHTS.filter(item => note[item.key]).map(
    item => item.name
  )
  return activeHighlights.length > 0
    ? `加分：${activeHighlights.join('、')}`
    : null
}

export const getSharedNote = note => {
  return {
    score: getScore(note.status),
    notes: [
      note.memo?.replace(/\n/g, '; ') || '',
      getFacets(note),
      getHighLights(note)
    ]
      .filter(item => !!item)
      .join('；'),
    tracks: (note.tags || []).join('、')
  }
}
