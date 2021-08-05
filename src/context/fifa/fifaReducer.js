import{
    SEARCH_TEAM,
    SET_LOADING,
    CLEAR_PLAYERS,
    GET_PLAYERS,
    GET_PLAYER,
    CLEAR_TEAM,
    GET_TEAM

}from '../types'

export default (state,action) =>{
    switch(action.type){
        case SEARCH_TEAM:
            return{
                ...state,
                team: action.payload,
                loading: false
            }
        case GET_PLAYERS:
            return{
                ...state,
                players: action.payload,
                loading:false
            }
        case GET_PLAYER:
            return{
                ...state,
                player: action.payload,
                loading:false
            }
        case GET_TEAM:
            return{
                ...state,
                player: action.payload,
                loading:false
            }
        case CLEAR_PLAYERS:
            return{
                ...state,
                players:[],
                loading:false
            }
        case CLEAR_TEAM:
            return{
                ...state,
                teams:[],
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return  state
    }
}