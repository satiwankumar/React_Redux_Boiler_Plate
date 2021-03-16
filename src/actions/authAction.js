import api from '../utils/api';
import { toast } from 'react-toastify';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SUCCESS_VERIFY_CODE,
    SUCCESS_FORGOTPASSWORD,
    LOGOUT,
    CHANGE_PASSWORD
} from './types';

// Load User
export const loadUser = () => async dispatch => {
    try {
        const res = await api.get('/auth');
        // console.log(res)

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register User
export const register = formData => async dispatch => {
    try {
        const res = await api.post('/users', formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        // if (errors) {
        //   errors.forEach(error => dispatch(setAlert(error.message, 'danger')));
        // }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    console.log(email,password)
    const body = { email, password, };

    try {
        const res = await api.post('/auth/login/admin', body);
        console.log(res.data)


        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
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




        dispatch(loadUser());
    } catch (err) {
        if (!err.response) {
            // network error
            // this.errorStatus = 'Error: Network Error';
            toast.error(`🦄 Network Error!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

        else {
            // console.log(errors)
            const errors = err.response.data.errors;

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
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

//forgot password

export const forgotPassword = (email, history) => async dispatch => {

    const body = JSON.stringify({ email })

    try {
        const res = await api.post('/auth/forgot', body)
        console.log(res.data.message)
        dispatch({
            type: SUCCESS_FORGOTPASSWORD,
            payload: res.data
        });
        // const message  = await res.data.message


        toast.success(`🦄  ${res.data.message} `, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,




        })
        setTimeout(() => {
            history.push('/forgotCode')

        }, 3000);



    }





    catch (err) {
        console.log(err.response.data.message)
        toast.error(`🦄 ${err.response.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        // const errors = err.response.data.errors;
        //   errors.forEach(error=>error)


        // if (errors) {
        //   errors.forEach(error => toast.error(`🦄 ${error.message}`, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     })
        // )

        // }
        dispatch(
            {
                type: LOGIN_FAIL
            }
        )
    }

}

export const verifyCode = (resetCode, history) => async dispatch => {

    const body = JSON.stringify({ resetCode })

    try {
        const res = await api.post('/auth/verifycode', body)
        // console.log(res)
        dispatch({
            type: SUCCESS_VERIFY_CODE,
            payload: resetCode
        });


        toast.success(`🦄  ${res.data.message} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,




        })

        setTimeout(() => {
            history.push('/resetpassword')

        }, 3000);


    }





    catch (err) {

        const errors = err.response.data.errors;
        //  console.log(errors)


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
        dispatch(
            {
                type: LOGIN_FAIL
            }
        )
    }

}





export const resetPassword = (newpassword, confirmpassword, resetCode, history) => async dispatch => {

    // console.log(resetCode)
    const body = JSON.stringify({ newpassword, confirmpassword })

    try {
        const res = await api.post(`/auth/reset/${resetCode}`, body)
        console.log("res.data", res.data.message)
        dispatch({
            type: SUCCESS_VERIFY_CODE,
            payload: res.data
        });


        toast.success(`🦄  ${res.data.message} `, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,




        })

        setTimeout(() => {
            history.push('/')


        }, 3000);


    }





    catch (err) {

        const errors = err.response.data.errors;
        console.log(err.response)
        // toast.error(err.res.data.message)


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
        dispatch(
            {
                type: LOGIN_FAIL
            }
        )
    }

}


// Logout
export const logout = () => async dispatch => {

    const res = await api.get('/auth/logout')
    // console.log(res)
    window.jQuery('#logout').modal('hide');
    window.jQuery('.modal-backdrop').modal('hide');

    dispatch({ type: LOGOUT })
    toast.success(`🦄 ${res.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })





}


export const updatePassword = (currentpassword, newpassword, confirmpassword, history) => async dispatch => {
    const body = { currentpassword, newpassword, confirmpassword };

    try {


        const res = await api.post('/auth/changepassword', body)
        // console.log(res)
        dispatch({
            type: CHANGE_PASSWORD,
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

        if (res) {
            history.push('/profile')
        }
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