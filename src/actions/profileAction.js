import api from '../utils/api';
import { toast } from 'react-toastify';
import { loadUser } from './authAction'
import {
    GET_PROFILE,
    GET_CURRENT_PROFILE,
    GET_USERS,
    PROFILE_ERROR,
    USERS_ERROR,
    UPDATE_USER,
    UPDATE_USER_STATUS,
    GET_NOTIFICATIONS, SORT_ACTION, RIDERS_ERROR, UPDATE_RIDER_STATUS,
    

} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get('/users/me');
        // console.log("responsesdfsfdsdfdsf",res)
        dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data
        });

    } catch (err) {
        // alert("err",err)
        console.log("errorProfile", err)
        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Get all profiles
export const getUsers = (page, limit, selection) => async dispatch => {
    // dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await api.get(`/users?page=${page}&limit=${limit}&selection=${selection}`);

        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        // console.log(err)
        dispatch({
            type: USERS_ERROR,
            payload: err

        });
    }
};


// Get profile by ID
export const getUserById = userId => async dispatch => {

    try {
        const res = await api.get(`/users/${userId}`);
        // console.log(res)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//updateProfile
export const updateProfile = (firstname, lastname,phone_no, history) => async dispatch => {
    const body = { firstname, lastname,phone_no };

    try {


        const res = await api.put('/users/edit', body)
        // console.log(res)
        dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data
        })

        toast.success(`🦄 ${res.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })


        dispatch(loadUser());
        // window.jQuery('#confirmpwd').modal('show');
        
        if (res) {
            history.push('/profile')
        }
    } catch (err) {

        const errors = err.response.data.errors;
        console.log(errors)

        if (errors) {
            errors.forEach(error => toast.error(`🦄 ${error.msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            )

        }

    }
}


export const UpdateUserStatus = (userId, status, history) => async dispatch => {
    console.log(userId, status)
    const body = JSON.stringify({ userId })

    try {
        const res = await api.post(`/users/status/${status}`, body)
        // console.log(res.data)
        dispatch({
            type: UPDATE_USER_STATUS,
            payload: { ID: userId }
        });

        toast.success(`🦄 ${res.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        history.push('/users')


        window.jQuery('#blockuser').modal('hide');



        // history.push(`/lugger`)


    } catch (err) {
        console.log(err)
        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};



// Get all notifications
export const getNotifications = (page) => async dispatch => {

    try {
        const res = await api.get(`/notifications/admin?page=${page}`);
        console.log(res.data)
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: res.data
        });
    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }

        });
    }
};

//sortAction

export const SortAction = (fieldname, orderstate) => async dispatch => {
    // alert("called")
    try {
        const res = await api.get(`/users?fieldname=${fieldname}&order=${orderstate}`);
        console.log(res.data)
        dispatch({
            type: SORT_ACTION,
            payload: res.data
        });
    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            // payload: { msg: err.response.statusText, status: err.response.status }

        });
    }
};


//update User
export const updateUser = (userId,firstname,lastname,phone_no,history)=> async dispatch=>{

    const body = { firstname, lastname,phone_no };
  
      try {
  
  
          const res = await api.post(`users/edit/${userId}`,body)
        // console.log(res)
          dispatch({
              type:UPDATE_USER,
              payload : res.data
          })
  
          toast.success(`🦄 ${res.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        
            
    //   dispatch(loadUser());
        
        //   if(res){
        //       history.push('/u)
        //    }
      } catch (err) {
     
        const errors = err.response.data.errors;
        console.log(errors)
  
        if (errors) {
          errors.forEach(error => toast.error(`🦄 ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        )
            
        }
       
      }
  }
