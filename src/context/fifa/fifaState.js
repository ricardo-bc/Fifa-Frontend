// actions 
import React, {useReducer} from 'react'
import axios from 'axios'
import FifaContext from './fifaContext'
import FifaReducer from './fifaReducer'
import{
    
    SEARCH_TEAM,
    SET_LOADING,
    CLEAR_PLAYERS,
    CLEAR_TEAM,
    GET_PLAYER,
    GET_PLAYERS,
    GET_TEAM
}from '../types'

const FifaState = props =>{
    const initialState ={
        players:[],
        player:{},
        team:[],
        teams:[],
        loading:false
    }
    const [state,dispatch] = useReducer(FifaReducer,initialState)

    const headers ={
        'Content-Type': 'application/json',
        'Authorization':'Token 9bedf7c2a180bb5e318d01541a5152aae67af666',
    }
    const searchTeam = async text =>{
        setLoading()

        const searchParams ={
            'name': text,
            'page':1
        }

        let res  = ""
        await axios.post('http://127.0.0.1:8200/api/v1/team',searchParams,{headers:headers}).then((response) =>{
            res = response.data
        }).catch(error =>{
           res = error
        })

        dispatch({
            type: SEARCH_TEAM,      
            payload:  res
        })
     

      }

    const getTeam = () =>{
        setLoading()

        dispatch({
            type: GET_TEAM,
            pyload: state.team
        })
    }
    const getPlayers = async players => {
        setLoading()
        const res = await axios.get('http://127.0.0.1:8200/api/v1/players_list',{headers:headers})
        dispatch({
            type: GET_PLAYERS,
            payload: res.data.players
        })
    }

    const getPlayer = async idplayer => {
        setLoading()
        let playerJ = {}
        if (state.players == undefined){
        }
        for (let player of state.players ){
            if(player.id == idplayer){
                playerJ = player
            }
        }

        dispatch({
            type: GET_PLAYER,
            payload: playerJ
        })
      }


    

    const clearPLayers = () => dispatch({type: CLEAR_PLAYERS})
    const clearTeam = () => dispatch({type: CLEAR_TEAM})

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})
    return <FifaContext.Provider
        value={{
            players: state.players,
            player: state.player,
            team : state.team,
            loading:state.loading,
            teams :state.teams,
            searchTeam,
            clearPLayers,
            getPlayer,
            getPlayers,
            getTeam,
            clearTeam,
        }}
    >
        {props.children}
    </FifaContext.Provider>
}

export default FifaState