import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { DataContext } from '_api'
import useProposals from '_api/useProposals'
import { useNotes, NotesContext } from '_storage'

import List from 'App/List'

const App = () => {
  const { proposals, refetch } = useProposals()
  const { notes, getNote, setNote } = useNotes()

  return (
    <DataContext.Provider value={{ proposals, refetch }}>
      <NotesContext.Provider value={{ notes, getNote, setNote }}>
        <Switch>
          <Route path='/proposal/:id'>
            <div>proposal</div>
          </Route>
          <Route path='/:status?'>
            <List />
          </Route>
        </Switch>
      </NotesContext.Provider>
    </DataContext.Provider>
  )
}

export default App
