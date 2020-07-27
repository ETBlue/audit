import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { DataContext } from '_proposal'
import useProposals from '_proposal/useProposals'
import { useNotes, NotesContext } from '_storage'
import { useSheet, SheetContext } from '_gsheet'

import List from 'App/List'
import Settings from 'App/Settings'
import Instance from 'App/Instance'

const App = () => {
  const { proposals, refetch } = useProposals()
  const notesContext = useNotes()
  const sheetContext = useSheet()

  return (
    <DataContext.Provider value={{ proposals, refetch }}>
      <NotesContext.Provider value={{ ...notesContext }}>
        <SheetContext.Provider value={{ ...sheetContext }}>
          <Switch>
            <Route path='/settings/:action?'>
              <Settings />
            </Route>
            <Route path='/proposal/:id'>
              <Instance />
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
