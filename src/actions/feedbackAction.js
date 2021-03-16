import api from '../utils/api';
import {  toast } from 'react-toastify';
// import $ from 'jquery'
import {
    GET_FEEDBACK,
    FEEDBACK_ERROR,
    GET_FEEDBACK_BY_ID,
    DELETE_FEEDBACK,
    SORT_ACTION

} from './types';
// window.jQuery = $;


// Get all profiles
export const getFeedbacks = (page,limit) => async dispatch => {
  // dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get(`/contact?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_FEEDBACK,
      payload: res.data
    });
  } catch (err) {

    dispatch({
      type: FEEDBACK_ERROR,
      payload:err
      
    });
  }
};




// Get profile by ID
export const getFeedbackById = feedbackId => async dispatch => {
  
  try {
    const res = await api.get(`/contact/${feedbackId}`);
      // console.log(res)
    dispatch({
      type: GET_FEEDBACK_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload:err
  })
};
}



export const deleteFeedback = contact_id => async dispatch => {
  // alert("contact",contact_id)
  const body = {contact_id}
  try {
    const res = await api.post(`/contact/remove`,body);
      // console.log(res)
    dispatch({
      type: DELETE_FEEDBACK,
      payload:  {ID:contact_id}
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
    // window.jQuery('#feedbackdeleted').modal('hide');

  //  $('#feedbackdeleted').modal('hide');
  } catch (err) {

console.log("error",err)

    
    dispatch({
      type: FEEDBACK_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};








//sortAction

export const SortAction= (fieldname,orderstate) => async dispatch => {
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
      type: FEEDBACK_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
      
    });
  }
};