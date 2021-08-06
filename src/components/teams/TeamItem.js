import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'
import FifaContext from '../../context/fifa/fifaContext'
import template from '../layout/soccer.gif'

const TeamItem = ({team: {name,avatar_url}}) => {
    const fifaContext= useContext(FifaContext)
    const{team}= fifaContext

   if(name == undefined){
       return null
   }
   if(name == 'Error'){
        return(
            <div className="card text-center" style={TeamStyle}>
                <h1>Not found, try other team name</h1>
            </div>
        )
   }
    return (
        <div className="card grid-1 text-center">
            <img src={avatar_url} alt="" className="round-img" style={TeamStyleTeam} ></img>
            <h1>{name}</h1>
            <h4>PLayers in Database: {team.Items}</h4>
            <div>
            {team.Players.map(player => (
                    <div className=" card text-center">
                        <img src={template} className="round-img" alt="" style={{width:'150px'}}></img>
                        <h2>Name: {player.name} </h2>
                        <h2>Nationality: {player.nationality}</h2>
                        <h2>Position: {player.game_position}</h2>
                    </div>
                ))} 
            </div>
        </div>

    )
    
}
const TeamStyle = {
    position:'absolute',
    gridGap: '2rem',
    right: '35%',

}
const TeamStyleTeam = {
    position:'absolute',
    gridGap: '2rem',
    right: '35%',

}
export default TeamItem
