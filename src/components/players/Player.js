import React, { Fragment, useEffect, useContext,Redirect  } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import FifaContext from '../../context/fifa/fifaContext'
import template from '../layout/soccer.gif'
const Player = ({match}) => { 
    const fifaContext= useContext(FifaContext)
    const{getPlayer,loading, player}= fifaContext

    useEffect(()=>{
        getPlayer(match.params.login)
        // eslint-disable-next-line
    },[])   
    const {
        id,
        name,
        game_position,
        nationality,
        team,
    }= player
    if(loading) return <Spinner></Spinner>
    return (
        <Fragment>
            <Link to='/' className ="btn btn-light">Back To List</Link>
            <div className="card player">
                <h1>{name}</h1>
                <div className="all center">
                    <img src={template} className="round-img" alt="" style={{width:'150px'}}></img>
                    <h2>Player</h2>
                    <h2>{id}</h2>
                    <div>
                    <ul>
                        <li>
                            {name && <Fragment>
                                <strong>Nationality:</strong> {nationality}
                                </Fragment>}
                        </li>
                        <li>
                            {name && <Fragment>
                                <strong>Team:</strong> {team}
                                </Fragment>}
                        </li>
                        <li>
                            {name && <Fragment>
                                <strong>Game Position:</strong> {game_position}
                                </Fragment>}
                        </li>                      
                    </ul>
                </div>
                </div>

            </div>
        </Fragment>
    )
  
}

export default Player
