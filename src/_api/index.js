import React from 'react'
import axios from 'axios'
import { last } from 'lodash'

export const fetchData = async () => {
  try {
    const response = await axios.get('https://api.summit2020.g0v.tw/projects')
    return response.data
      .filter(item => item.enable)
      .map(item => getProposal(item))
  } catch (error) {
    console.error(error)
    return []
  }
}

export const DataContext = React.createContext()

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
  for (const delimiter of [',', '/', '、']) {
    if (string.includes(delimiter))
      return string.split(delimiter).map(s => s.trim())
  }
  return string
}

const getProposal = item => {
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
    languages: [proposal.oral_language, proposal.oral_languate_other],
    url: `https://propose.summit2020.g0v.tw/proposal-detail/${item._id}`
  }
}

// cover_image: ""
// format: "工作坊 （90 分鐘）Workshop (90 min)"
// is_content_cc40: true
// is_presentation_cc40: true
// is_slide_cc40: true
// oral_language: "English"
// oral_languate_other: ""
// speakers: [
//   avatar_url: "https://i.imgur.com/WlwCz3Ih.jpg"
//   bio: "Danny is a user researcher based in Oakland, California."
//   bio_en: ""
//   city: "Oakland, California"
//   display_name: "Danny Spitzberg"
//   info_url: ""
//   organization: "TWC"
// ]
// summary: "Civic engagement doesn't appear in tech workplace discussions - "that's just my job" say people, "I just want to get paid and (eventually) go home." This workshop is about the power and responsibility we have together, to bring civic engagement into our place in production - our workplace. Organizing for change is not sustainable purely in volunteer efforts outside of our work. In fact, 996 work-life is an ideal place to start improving our conditions for ourselves, and others. This workshop builds on a 2018 panel at g0v titled, "Towards an Organized Tech Sector" with Danny Spitzberg, Felipe Ventura, Zhong-ting Lee, and Ching-Shu Hung (https://www.youtube.com/watch?v=zMwA9czEtwY). "
// summary_en: ""
// three_keywords: "tech, workplace, volunteering"
// title: "Volunteering at Work: Our Role as Tech Workers in a Productive Workplace"
// title_en: ""
// topic: "「沒有人」的島 Nobody’s island"
