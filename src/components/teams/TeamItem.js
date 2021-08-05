import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alert/alertContext'

const TeamItem = ({team: {name,avatar_url}}) => {
    console.log(name)


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
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}></img>
            <h3>{name}</h3>
            <div>
                <Link to={`/team/${name}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>

    )
    
}
const TeamStyle = {
    position:'absolute',
    gridGap: '1rem',
    right: '35%',

}
export default TeamItem
