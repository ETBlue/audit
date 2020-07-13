import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { DataContext } from '_api'
import useProposals from '_api/useProposals'
import { useNotes, NotesContext } from '_storage'

import List from 'App/List'

const App = () => {
  const { proposals } = useProposals()
  const { notes } = useNotes()

  return (
    <DataContext.Provider value={proposals}>
      <NotesContext.Provider value={notes}>
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
