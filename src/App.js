import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { DataContext } from '_proposal'
import useProposals from '_proposal/useProposals'
import { useNotes, NotesContext } from '_storage'
import { useSheet, SheetContext } from '_gsheet'

import List from 'App/List'
import Settings from 'App/Settings'

const App = () => {
  const { proposals, refetch } = useProposals()
  const { notes, getNote, setNote, saveNotes } = useNotes()
  const { sheet, fetchSheet, handleFetchDone } = useSheet()

  return (
    <DataContext.Provider value={{ proposals, refetch }}>
      <NotesContext.Provider value={{ notes, getNote, setNote, saveNotes }}>
        <SheetContext.Provider value={{ sheet, fetchSheet, handleFetchDone }}>
          <Switch>
            <Route path='/settings/:action?'>
              <Settings />
            </Route>
            <Route path='/proposal/:id'>
              <div>proposal</div>
            </Route>
            <Route path='/:status?'>
              <List />
            </Route>
          </Switch>
        </SheetContext.Provider>
      </NotesContext.Provider>
    </DataContext.Provider>
  )
}

export default App
