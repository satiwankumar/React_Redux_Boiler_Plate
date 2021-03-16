import { getFeedbackById } from '../actions/feedbackAction';
import {
    GET_FEEDBACK,
    FEEDBACK_ERROR,
    SORT_ACTION,
    GET_FEEDBACK_BY_ID,
    DELETE_REPORT,
    DELETE_FEEDBACK,
  } from '../actions/types';
  
  
  
  const initialState = {
    
    Feedbacks: [],
    Feedback:null,
    loading: true,
    error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
    
      case SORT_ACTION:{
        return {
          ...state,
          Feedbacks: payload,
          loading: false
        };
      }
      case GET_FEEDBACK:
        return {
          ...state,
          Feedbacks: payload,
          loading: false
        };
        case GET_FEEDBACK_BY_ID:{
          return {
            ...state,
            Feedback: payload,
            loading: false
          };
        }
        case DELETE_FEEDBACK:
          
          const s = {...state}
                
                
          
          s.Feedbacks.data = s.Feedbacks.data.filter(u => u._id !== payload.ID)
      
      
          return{
              ...s,
            loading:false
          } 
          case FEEDBACK_ERROR:{
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
  