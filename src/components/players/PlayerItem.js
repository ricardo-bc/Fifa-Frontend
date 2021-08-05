import React from 'react'
import { Link } from 'react-router-dom'
import template from '../layout/soccer.gif'

const PlayerItem = ({player: {id,name,avatar_url}}) => {
    return (
        <div className="card text-center">
            <img src={template} alt="" className="round-img" style={{width:'60px'}}></img>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <div>
                <Link to={`/player/${id}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>

    )
 
}

export default PlayerItem
