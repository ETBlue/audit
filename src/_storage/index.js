import React, { useCallback, useState } from 'react'

import { getNotes, getTags, TEMPLATE, SITE_ID } from './helpers'
import { STATUSES } from 'App/config'

export const NotesContext = React.createContext()

export const useNotes = () => {
  const [notes, setNotes] = useState(getNotes())
  const [tags, setTags] = useState(getTags(notes))

  const getNote = useCallback(
    id => {
      const note = notes[id]
      if (!note) {
        return {
          ...TEMPLATE
        }
      }

      if (!STATUSES.some(status => status.key === note.status)) {
        note.status = undefined
      }
      if (!note.tags || typeof note.tags !== 'object') {
        note.tags = []
      }
      if (isNaN(note.commentsVersion)) {
        note.commentsVersion = 0
      }
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
    if (name === 'tags') {
      setTags(getTags(notes))
    }
  }

  const saveNotes = string => {
    const startPosition = string.indexOf('{')
    const trimmedString = string.slice(startPosition)
    window.localStorage.setItem(SITE_ID, string)
    setNotes(JSON.parse(trimmedString))
  }

  return { notes, tags, getNote, setNote, saveNotes }
}
