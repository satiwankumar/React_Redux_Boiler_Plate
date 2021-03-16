import React, { useState,useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {forgotPassword } from '../../actions/authAction';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const ForgotPassword = ({forgotPassword,isAuthenticated, passwordRecovery,history },) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;
  const onchange = (e) => {

    // console.log(e.target.name)
    // console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    forgotPassword(email,history);
  };

  //Redirect if logged int

   
  if(isAuthenticated){
    return <Redirect to="/dashboard"/>

  }
  return (
    // <section className="register forget-pass">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-2 col-xl-3"></div>
    //       <div className="col-md-8 col-xl-6 col-12">
    //         <div className="register-main">
    //         <form onSubmit={e=>onSubmit(e)}>
    //             <img src="images/logo.png" className="img-full" alt="logo" />
    //             <div className="form-main">
    //               <div className="row">
    //                 <div className="col-md-12 text-center">
    //                   <h1>Password Recovery</h1>
    //                 </div>
    //               </div>

    //               <div className="fields">
    //                 <div className="row">
    //                   <div className="col-md-12">
    //                     <i className="fa fa-envelope"></i>
    //                     <input
    //                       spellcheck="true"
    //                       type="email"
    //                       spellcheck="true"
    //                       value={email}
    //                       onChange={e=>onchange(e)}
    //                       name="email"
    //                       className="form-control"
    //                       placeholder="Enter Email Address"
    //                       required="required"
    //                     />
    //                   </div>
    //                 </div>
    //                 <button
    //                   type="submit"
    //                   className="form-control continue-button">
    //                   continue
    //                 </button>
    //                 <div className="new-user">
    //                   <a href="/login" className="login back">
    //                     <i className="fa fa-long-arrow-left"></i>back to login
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="col-md-2 col-xl-3"></div>
    //     </div>
    //   </div>
    <>
    <div className="container-fluid admin-login pl-0">
    <div className="row">
      <div className="col-5 pr-0">
        <div className="admin-login-inner d-flex align-items-center justify-content-center">
          <img src="images/logo-bg.png" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
        <div className>
          <div className="admin-login-card w-100 p-5">
            <div className="text-left">
            <form onSubmit={e=>onSubmit(e)}>
              <h4 className="medium clr-orange">Password Recovery</h4>
              <hr className="blue_line bck-orange" />
              <div className="md-form md-outline input-with-pre-icon">
                <i className="fas fa-envelope  input-prefix active" />
                <input type="text" id="prefixInside2" className="form-control py-2" value={email} onChange={e=>onchange(e)} name="email" placeholder="Enter Email Address" required />
              </div>
              <a ><button type="submit" className="w-100 mt-2">Continue</button></a>
             
             </form>
             <div className="mt-3 text-center">
                    <Link to="/login" className="medium clr_grey"><i className="fa fa-arrow-circle-left mr-2" /> Back
                      To Website</Link>
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    <ToastContainer autoClose={2000} />
</>
  );
};


 
 

forgotPassword.propTypes = {

  forgotPassword: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool ,
  passwordRecovery: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  passwordRecovery:state.passwordRecovery,
 isAuthenticated : state.auth.isAuthenticated

});

export default connect(mapStateToProps, {forgotPassword })(ForgotPassword);
