import React from 'react'
import { Link } from 'react-router-dom'
const  Navbar =({title}) => {
        return (
            <nav className="navbar bg-primary">
                
                <h1>
                    {title}
                    <ul>
                        <li><Link to ='/'>Home</Link></li>
                        <li><Link to ='/PlayersList'>Players</Link></li>
                        <li><Link to ='/SearchTeam'>Teams Seach</Link></li>


                    </ul>
                </h1>
            </nav>
        )
}


export default Navbar
