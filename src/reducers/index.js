import { combineReducers } from 'redux';
import auth from './authReducer';
import profile from './profileReducer';
import dashboard from './dashboardReducer'
import feedback from './feedbackReducer'
export default combineReducers({
  auth,
  profile,
  dashboard,
  feedback

});
