import React, { useCallback, useState } from 'react'

import { getNotes, TEMPLATE, SITE_ID } from './helpers'
import { STATUSES } from 'App/config'

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

  const setNote = ({ id, name, value, version, commentsVersion }) => {
    const note = getNote(id)
    note[name] = value
    note.version = version
    note.commentsVersion = commentsVersion
    notes[id] = note
    window.localStorage.setItem(SITE_ID, JSON.stringify(notes))
    setNotes({ ...notes })
  }

  const saveNotes = string => {
    const startPosition = string.indexOf('{')
    const trimmedString = string.slice(startPosition)
    window.localStorage.setItem(SITE_ID, string)
    setNotes(JSON.parse(trimmedString))
  }

  return { notes, getNote, setNote, saveNotes }
}
