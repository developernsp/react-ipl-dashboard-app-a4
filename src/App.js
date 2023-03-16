import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'
import NotFound from './components/NotFound'
// import {Route} from 'workbox-routing'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
