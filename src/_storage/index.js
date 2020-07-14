import React, { useCallback, useState } from 'react'

const SITE_ID = 'g0vsummit2020audit'

// window.localStorage.removeItem(SITE_ID)

const TEMPLATE = {
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
  memo: ''
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
  return JSON.parse(notes)
}

export const NotesContext = React.createContext()

export const useNotes = () => {
  const [notes, setNotes] = useState(getNotes())

  const getNote = useCallback(
    id =>
      notes[id] || {
        ...TEMPLATE
      },
    [notes]
  )

  const setNote = ({ id, name, value }) => {
    const note = getNote(id)
    note[name] = value
    notes[id] = note
    window.localStorage.setItem(SITE_ID, JSON.stringify(notes))
    setNotes({ ...notes })
  }

  return { notes, getNote, setNote }
}
