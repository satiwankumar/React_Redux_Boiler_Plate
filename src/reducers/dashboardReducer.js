import {GET_DASHBOARD_DATA,DASHBOARD_ERROR} from '../actions/types'

const initialState = {
    
    Dashboard :[],
 
    loading:true
}

export default function(state = initialState, action){
    const {type,payload }=action

    switch(type){
        case GET_DASHBOARD_DATA:
            return {
                ...state,
                loading:false,
                Dashboard:payload,
            }
        case DASHBOARD_ERROR:
            return{
                ...state,
                loading:false,
                Dashboard:[],
            }
        default:
                return state;
         }   
}