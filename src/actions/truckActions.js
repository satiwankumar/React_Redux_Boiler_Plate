import api from '../utils/api';
import {  toast } from 'react-toastify';
// import $ from 'jquery'
import {
    GET_TRUCKS,
    GET_TRUCKS_DETAIL_BY_ID,
    TRUCK_ERROR

} from './types';
// window.jQuery = $;


// Get all profiles
export const getTrucks = (page,limit) => async dispatch => {
  // dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get(`/truck?page=${page}&limit=${limit}`);

    dispatch({
      type: GET_TRUCKS,
      payload: res.data
    });
  } catch (err) {

    dispatch({
      type: TRUCK_ERROR,
      payload:err
      
    });
  }
};




// Get profile by ID
export const getTruckById = truck_id => async dispatch => {
  
  try {
    const res = await api.get(`/truck/${truck_id}`);
      // console.log(res)
    dispatch({
      type: GET_TRUCKS_DETAIL_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TRUCK_ERROR,
      payload:err
  })
};
}

