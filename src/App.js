import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import PlayersList from './components/pages/PlayersList'
import NotFound from './components/pages/NotFound'
import Alert from './components/layout/Alert'
import Player from './components/players/Player'
import Team from './components/teams/Team'
import FifaState from './context/fifa/fifaState'
import AlertState from './context/alert/AlertState'
import SearchTeam from './components/pages/SearchTeamL'

const App = () => {
  
  return (
    <FifaState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon ="fab fa-affiliatetheme" title= " FiFa"/>
              <div className = "conatiner"> 
                <Alert alert={alert}></Alert>
                <Switch>
                  <Route exact path ='/' component={Home} />
                  <Route exact path ='/PlayersList' component={PlayersList} />
                  <Route exact path ='/SearchTeam' component={SearchTeam} />

                  <Route exact path ='/player/:login' component ={Player}/>
                  <Route exact path ='/team/:login' component ={Team}/>

                  <Route component={NotFound}/>
                </Switch>
              </div>
          </div>
        </Router>
      </AlertState>
    </FifaState>
    
  )
}

export default App;
