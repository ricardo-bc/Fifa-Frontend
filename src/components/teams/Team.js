import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import FifaContext from '../../context/fifa/fifaContext'
import template from '../layout/soccer.gif'
import PlayerItem from '../players/PlayerItem'

const Team = ({match}) => { 
    const fifaContext= useContext(FifaContext)
    const{getTeam,loading,team}= fifaContext
    useEffect(()=>{
        getTeam()
        // eslint-disable-next-line
    },[])
    
    if(loading) return <Spinner></Spinner>
    return (
        <Fragment key={team.name}>
            <Link to='/SearchTeam' className ="btn btn-light">Back To Search</Link>
            <div className="card text-center ">
                <div className="all center">
                    <img src={template} className="round-img" alt="" style={{width:'150px'}}></img>
                    <h1>{team.name}</h1>
                    <h2>Players #:  {team.Players.length}</h2>

                </div>
            </div>
           <div className="card  grid-2">
                {team.Players.map(player => (
                    <div className=" card text-center">
                        <img src={template} className="round-img" alt="" style={{width:'150px'}}></img>
                        <h2>Name: {player.name} </h2>
                        <h2>Nationality: {player.nationality}</h2>
                        <h2>Position: {player.game_position}</h2>
                    </div>
                ))} 
            </div> 
              
            
        </Fragment>
    )              
  
}

export default Team
