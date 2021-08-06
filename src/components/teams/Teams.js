import React,{useContext} from 'react'
import TeamItem from './TeamItem'
import Spinner from '../layout/Spinner'
import FifaContext from '../../context/fifa/fifaContext'
const Teams =()=> {
    const fifaContext= useContext(FifaContext)
    const {loading,team}= fifaContext

    if(team == undefined){
        return null
    }

    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={TeamStyle}>
 
                <TeamItem key={team.id} team={team} />
              
            </div>
        )
    }  
}

const TeamStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Teams
