import React ,{useState}from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {Link,Redirect} from 'react-router-dom'
import {verifyCode} from '../../actions/authAction'
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const ForgotCode = ({verifyCode,isAuthenticated,history },) => {

  const [formData,setFormData] = useState({
      
    resetCode:"",
    

});

const {resetCode} = formData
const onchange=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})

}


const onSubmit= async(e)=>{
    e.preventDefault()
    console.log(resetCode)
    verifyCode(resetCode,history)
 

}





  if(isAuthenticated){
    return <Redirect to="/dashboard"/>

  }
  

    return (
        <div>
        {/* <section className="register forget-pass">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xl-3"></div>
            <div className="col-md-8 col-xl-6 col-12">
              <div className="register-main">
                <form onSubmit={e=>onSubmit(e)}>
                  <img src="images/logo.png" className="img-full" alt="logo"/>
                  <div className="form-main">
                  <div className="row">
                    <div className="col-md-12 text-center">
                       <h1>Password Recovery</h1>
                    </div>
                  </div>
               
                  
                  <div className="fields">
                    <div className="row">
                      
                      <div className="col-md-12">  
                        <i className="fa fa-pencil" aria-hidden="true"></i><input spellcheck="true" type="number" name="resetCode" spellcheck="true" className="form-control" onChange={e=>onchange(e)}  placeholder="Enter Verification Code"/>
                      </div> 
                      
                     
                    </div>
                    <button type="submit" className="form-control continue-button">continue</button>
                    <div className="new-user">
                
                      <Link to="/" className="login back"><i className="fa fa-long-arrow-left"></i>back to login</Link>
                      </div>
                  </div>
              
              
               
                
              </div>
              </form>
            </div>
              
          </div>
          <div className="col-md-2 col-xl-3"></div>
        </div>
        </div>

      </section> */}
            <div className="container-fluid admin-login pl-0">
        <div className="row">
          <div className="col-5 pr-0">
            <div className="admin-login-inner d-flex align-items-center justify-content-center">
              <img src={process.env.PUBLIC_URL+"/images/logo-bg.png"} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
            <div className>
              <div className="admin-login-card w-100 p-5">
                <div className="text-left">
                  <h4 className="medium clr-orange">Password Recovery</h4>
            <form  onSubmit={e=>onSubmit(e)}> 
                  <hr className="blue_line bck-orange" />
                  <div className="md-form md-outline mb-0 input-with-pre-icon">
                    <i className="fas fa-pencil-alt input-prefix active" />
                    <input type="text" id="prefixInside2" className="form-control py-2" placeholder="Enter Verification Code" name="resetCode" onChange={e=>onchange(e)} />
                  </div>
                  <p className="l-grey text-center mt-3">Did not receive email? <a href className="clr-orange">
                      Send Again</a> 30 sec</p>
                  <a href="password-recovery-3.html"><button className="w-100 mt-4">Continue</button></a>
                  <div className="mt-3 text-center">
                    <Link to="/login" className="medium clr_grey"><i className="fa fa-arrow-circle-left mr-2" /> Back
                      To Website</Link>
                  </div>
                  </form> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
      
        </div>
    )
}
ForgotCode.propTypes = {

  verifyCode: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
};
const mapStateToProps = (state) => ({
  passwordRecovery:state.passwordRecovery,
 isAuthenticated : state.auth.isAuthenticated,

 

});

export default connect(mapStateToProps, {verifyCode })(ForgotCode);

