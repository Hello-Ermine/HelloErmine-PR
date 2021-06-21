import { AppContainer } from './App.style'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'

const App = () => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </AppContainer>
  )
}

export default App
