import React, { Fragment, useEffect, useContext } from 'react'
import FifaContext from '../../context/fifa/fifaContext'
import Teams from '../teams/Teams'
import Search from '../players/Search'

export const SearchTeam = () => {
    const fifaContext= useContext(FifaContext)
   
    useEffect(()=>{
        fifaContext.clearTeam()
        // eslint-disable-next-line
    },[])
    return (
        <Fragment>
            <Search/>
            <Teams/>
        </Fragment>
    )
}
export default SearchTeam