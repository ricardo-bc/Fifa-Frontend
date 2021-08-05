import React,{useContext} from 'react'
import PlayerItem from './PlayerItem'
import Spinner from '../layout/Spinner'
import FifaContext from '../../context/fifa/fifaContext'
const Players =()=> {
    const fifaContext= useContext(FifaContext)
    const {loading,players}= fifaContext
    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={playerStyle}>
                {players.map(player => (
                        <PlayerItem key={player.id} player={player} />
                    ))}            
            </div>
        )
    }  
}

const playerStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Players
