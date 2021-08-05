import React, {useState, useContext} from 'react'
import FifaContext from '../../context/fifa/fifaContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () =>  {
    const fifaContext= useContext(FifaContext)
    const alertContext= useContext(AlertContext)

    const[text,setText] = useState('')
    const {setAlert} = alertContext
    
    const onChange = (e) =>{
        setText( e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(text ===''){
            setAlert('Please enter some futbool team','light')
        }else{
            fifaContext.searchTeam(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit = {onSubmit} className="form">
                <input type="text" 
                    name="text" 
                    placeholder="Search Teams by Name..."
                    value={text}
                    onChange = {onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block">

                </input>
            </form>
            {fifaContext.teams.length > 0 &&(
                <button className="btn btn-light btn-block" onClick={fifaContext.clearTeams}>clear</button>
            )}
        </div>
    )
    
}

export default Search
