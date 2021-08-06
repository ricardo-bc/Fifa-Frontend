import React, {Location, Fragment, useEffect, useContext } from 'react'
import FifaContext from '../../context/fifa/fifaContext'

import Players from '../players/Players'

export const PlayersList = () => {
    const fifaContext= useContext(FifaContext)
    useEffect(()=>{
        fifaContext.getPlayers()
        // eslint-disable-next-line
    },[])
    return (
        <Fragment>
            <Players/>
        </Fragment>
    )
}
export default PlayersList