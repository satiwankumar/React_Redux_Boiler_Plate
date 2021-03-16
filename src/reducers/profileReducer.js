import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    GET_CURRENT_PROFILE,
    UPDATE_PROFILE,
    GET_USERS,
    USERS_ERROR,
    UPDATE_USER,
    UPDATE_USER_STATUS,GET_NOTIFICATIONS,SORT_ACTION,
  
  } from '../actions/types';
  
  
  
  const initialState = {
    currentProfile:null,
    profile: null,
    Users: [],
    Notifications:{},
    test:[],
    loading: true,
    error: {}
  };
  
const profileReducer =  function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false
        };
      case GET_CURRENT_PROFILE:
      case UPDATE_PROFILE:
          return {
            ...state,
            currentProfile: payload,
            loading: false
      };
      case SORT_ACTION:{
        return {
          ...state,
          Users: payload,
          loading: false
        };
      }
      case GET_USERS:
        return {
          ...state,
          Users: payload,
          loading: false
        };
       
  
        
        case GET_NOTIFICATIONS:
          return {
            
            ...state,
            Notifications: payload,
            loading:false
  
          };
     
      case USERS_ERROR:
            return {
              ...state,
              loading: false,
              Users: []
      };
      
      
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null,
          currentProfile:null
        };
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          currentProfile:null
          
        };
    case  UPDATE_USER_STATUS:
  
      // payload.ID
  
      const s = {...state}
  
  
      // const idx = s.Users.data.findIndex(user => user._id === payload.ID );
      //       s.Users.data[idx].status = !s.Users.data[idx].status
          console.log(payload)
          
      s.Users.data = s.Users.data.filter(u => u._id !== payload.ID)
      
  
      return{
          ...s,
        loading:false
      }
      case UPDATE_USER:
          return {
            ...state,
            profile: payload,
            loading: false
      };
      default:
        return state;
    }
  }
  export default profileReducer