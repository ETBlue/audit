import { last } from 'lodash'

const getTopic = string => {
  if (string.includes('「沒有人」的島')) return 'nobody'
  if (string.includes('島嶼大聯盟')) return 'federation'
  if (string.includes('大島開放')) return 'open'
  if (string.includes('沒有島是局外島')) return 'outside'
  if (string.includes('第四個島')) return 'fourth'
  if (string.includes('賢者之島')) return 'academia'
  if (string.includes('海海人聲')) return 'voice'
  console.error('missing topic: ', string)
}

const getFormat = string => {
  if (string.includes('演講')) return 'talk'
  if (string.includes('工作坊')) {
    if (string.includes('60')) return 'workshop_60'
    if (string.includes('90')) return 'workshop_90'
    if (string.includes('120')) return 'workshop_120'
  }
  if (string.includes('主題論壇')) {
    if (string.includes('60')) return 'panel_60'
    if (string.includes('90')) return 'panel_90'
    if (string.includes('120')) return 'panel_120'
  }
  console.error('missing format: ', string)
}

const getLicense = proposal => {
  if (proposal.is_slide_cc40 && proposal.is_presentation_cc40)
    return 'everything_open'
  if (proposal.is_presentation_cc40) return 'presentation_open'
  if (proposal.is_slide_cc40) return 'slides_open'
  return 'unlicensed'
}

const getKeywords = string => {
  for (const delimiter of [',', '，', '、', '/']) {
    if (string.includes(delimiter))
      return string.split(delimiter).map(s => s.trim())
  }
  return [string]
}

export const getProposal = item => {
  const proposal = last(item.versions)
  const {
    related_url,
    speakers,
    summary,
    summary_en,
    title,
    title_en
  } = proposal
  return {
    id: item._id,
    version: item.versions_count,
    related_url,
    speakers,
    summary,
    summary_en,
    title,
    title_en,
    topic: getTopic(proposal.topic),
    format: getFormat(proposal.format),
    license: getLicense(proposal),
    keywords: getKeywords(proposal.three_keywords),
    languages: [proposal.oral_language, proposal.oral_languate_other].filter(
      lang => lang.length > 0
    ),
    url: `https://propose.summit2020.g0v.tw/proposal-detail/${item._id}`
  }
}
