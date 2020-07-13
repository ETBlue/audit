import React, { useState } from 'react'

const SITE_ID = 'g0vsummit2020audit'

// window.localStorage.removeItem(SITE_ID)

const TEMPLATE = {
  '5edcee7dba206b030d66a2c4': {
    status: undefined,
    facets: ['misc'],
    highlights: ['localization'],
    tags: []
  }
}

export const getNotes = () => {
  let notes = window.localStorage.getItem(SITE_ID)
  if (!notes) {
    window.localStorage.setItem(SITE_ID, JSON.stringify(TEMPLATE))
    notes = window.localStorage.getItem(SITE_ID)
  }
  return JSON.parse(notes)
}

export const NotesContext = React.createContext()

export const useNotes = () => {
  const [notes, setNotes] = useState(getNotes())

  const getNote = id => notes[id] || {}

  const setNote = ({ id, name, value }) => {
    const note = getNote(id)
    note[name] = value
    notes[id] = note
    window.localStorage.setItem(SITE_ID, JSON.stringify(notes))
    setNotes(getNotes())
  }

  return { notes, getNote, setNote }
}
