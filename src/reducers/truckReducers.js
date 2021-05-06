import { getFeedbackById } from '../actions/feedbackAction';
import {
   GET_TRUCKS,
   GET_TRUCKS_DETAIL_BY_ID,
   TRUCK_ERROR
  } from '../actions/types';
  
  
  
  const initialState = {
    
    Trucks: [],
    Truck:null,
    loading: true,
    error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    
     
      case GET_TRUCKS:
        return {
          ...state,
          Trucks: payload,
          loading: false
        };
        case GET_TRUCKS_DETAIL_BY_ID:{
          return {
            ...state,
            Truck: payload,
            loading: false
          };
        }
      
          case TRUCK_ERROR:{
            return{
                ...state,
                Feedbacks:payload,
                // Feedback:payload,
                loading:false
            }
        }
       
 
      default:
        return state;
    }
  }
  