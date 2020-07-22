import React, { useCallback, useState } from 'react'

import { getNotes, TEMPLATE, SITE_ID } from './helpers'

// window.localStorage.removeItem(SITE_ID)

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

  const setNote = ({ id, name, value, version }) => {
    const note = getNote(id)
    note[name] = value
    note.version = version
    notes[id] = note
    window.localStorage.setItem(SITE_ID, JSON.stringify(notes))
    setNotes({ ...notes })
  }

  const saveNotes = string => {
    window.localStorage.setItem(SITE_ID, string)
    setNotes(JSON.parse(string))
  }

  return { notes, getNote, setNote, saveNotes }
}
