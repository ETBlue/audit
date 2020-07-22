import React, { useCallback, useState } from 'react'

import { getNotes, TEMPLATE, SITE_ID } from './helpers'
import { STATUSES } from 'App/config'

// window.localStorage.removeItem(SITE_ID)

export const NotesContext = React.createContext()

export const useNotes = () => {
  const [notes, setNotes] = useState(getNotes())

  const getNote = useCallback(
    id => {
      const note = notes[id]

      if (!note)
        return {
          ...TEMPLATE
        }

      if (!STATUSES.some(status => status.key === note.status))
        note.status = undefined

      return note
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
