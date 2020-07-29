export const SITE_ID = 'g0vsummit2020audit'

export const TEMPLATE = {
  status: undefined,
  achievement: false,
  experience: false,
  research: false,
  resource: false,
  plan: false,
  tutorial: false,
  taste: false,
  discussion: false,
  facet_misc: false,
  localization: false,
  gender: false,
  area: false,
  highlight_misc: false,
  memo: '',
  tags: [],
  version: undefined,
  commentsVersion: 0
}

export const getNotes = () => {
  let notes = window.localStorage.getItem(SITE_ID)
  if (!notes) {
    window.localStorage.setItem(
      SITE_ID,
      JSON.stringify({ template: { ...TEMPLATE } })
    )
    notes = window.localStorage.getItem(SITE_ID)
  }
  const startPosition = notes.indexOf('{')
  const trimmedNotes = notes.slice(startPosition)
  return JSON.parse(trimmedNotes)
}

export const getTags = notes => {
  const uniqueTags = new Set()
  for (const id in notes) {
    const tags = notes[id].tags || []
    if (tags.length > 0) {
      for (const tag of tags) {
        uniqueTags.add(tag)
      }
    }
  }
  return Array.from(uniqueTags).sort()
}
