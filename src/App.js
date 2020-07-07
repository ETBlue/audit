import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Menu, Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <div className='App'>
      <Menu secondary pointing>
        <Menu.Item name='todo' active='{}' />
      </Menu>
      <Switch>
        <Route path='/'>
          <div>blah</div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
