import React,{ useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from'prop-types'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {login,forgotPassword,resetPassword,verifyCode} from '../../actions/authAction'




const Login = ({isAuthenticated,isAdmin,login,forgotPassword,resetPassword,code,verifyCode,history}) => {
// const [refresh, setstate] = useState(false)
const [passtype,Setpasstype] = useState(false)

    const [formData,setFormData] = useState({
      
        email:'',
        password:'',
        forgotemail:'',
        resetCode:'',
        newPassword:'',
        confirmPassword:'',
    
 
    });

    const {email,password,forgotemail,resetCode,newPassword,confirmPassword} = formData
    const onchange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }

  
    const onSubmit= async(e)=>{
        e.preventDefault()
        console.log("email,password")
        // console.log(email,password)
        login(email,password,true)
     

    }

  
  const handleForgot = async (e) => {
    e.preventDefault();
    console.log(forgotemail)
    // alert("called")
    forgotPassword(forgotemail,history);
  };

  const handleVerfyCode= async(e)=>{
    e.preventDefault()
    // console.log(resetCode)
    verifyCode(resetCode,history)
 
  }
  
const handleReset= async(e)=>{
  e.preventDefault()
console.log(newPassword,confirmPassword,code)
  resetPassword(newPassword,confirmPassword,code,"admin",history)


}

    //Redirect if logged int
    if(isAuthenticated){
      return <Redirect to="/dashboard"/>

    }
    return (
       <>
       <section className="admin-login ad-log">
        <div className="container">
          <div className="admin-login-card">
            <div className="row">
              <div className="col-6">
                <div className="admin-inner">
                  <img src="images/logo-bg.png" alt="" className="img-fluid h-100" />
                </div>
              </div>
              <div className="col-md-6 my-auto p-70">
                <img src="images/logo.png" alt="" className="img-fluid mx-auto" />
                <h2 className="s-bold d-pur source">Login</h2>
              <form onSubmit={e=>onSubmit(e)}>

                <div className="md-form md-outline input-with-pre-icon">
                  <i className="far fa-envelope clr-orange input-prefix" />
                  <input type="email" id="prefixInside2" className="form-control py-3" value={email} name="email"  placeholder="Enter Email Address" onChange={(e)=>onchange(e)} required   />
                </div>
                {/* <div className="form-field position-relative" >
        <img src="images/lock.png" className="left-icon" aria-hidden="true" />
        <input type="password" className="site-input login both-icon enter-input w-100" placeholder="Enter Password" name id />
        <i className="fa enter-icon right-icon fa-eye-slash" aria-hidden="true" />
      </div> */}
                <div className="md-form md-outline input-with-pre-icon">
                  <img src="images/lock.png" className="input-prefix" />
                  
                  <input type={passtype==false?"password":"text"} id="prefixInside2" className="form-control py-3" value={password} name="password" placeholder="Enter Password" onChange={(e)=>onchange(e)} required  />
                  <i className={`fas fa-eye${passtype==false?"-slash":""} hide-pass`} onClick={()=>Setpasstype(!passtype)} />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <input type="checkbox" id name className="custom-check" defaultValue="Remember me" />
                    <label className="jost ml-2" htmlFor style={{color: '#5D5D5D', fontSize: '13px'}}>Remember me</label>
                  </div>
                  <a href="#_" data-toggle="modal" data-target="#pwdrecovery1" style={{textDecoration: 'underline', fontSize: '13px'}} className="jost">Forgot Password?</a>
                </div>
                <a ><button type="submit" className="mt-xm-5 mt-3 source">Login</button></a>
                <div className="mt-sm-5 mt-3">
                  <a href="#_" className="s-bold f-16 l-black jost d-flex align-items-center justify-content-center"><img src="images/right-arrow.png" className="img-fluid mr-1" /> Back To Website</a>
                </div>
              </form>

              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="pwdrecovery1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="pt-1 pb-5 px-sm-5 px-1">
                <h2 className="s-bold source d-pur">Password Recovery</h2>
                <div className="md-form md-outline input-with-pre-icon">
                  <i className="far fa-envelope clr-orange input-prefix" />
                  <input type="text" id="prefixInside2" className="form-control py-3" placeholder="Enter Email Address" />
                </div>
                <a href="#_"><button className="source" data-toggle="modal" data-target="#pwdrecovery2" data-dismiss="modal" aria-label="Close">Continue</button></a>
                <a href="admin-login.html" className="s-bold f-16 l-black jost d-flex align-items-center justify-content-center mt-sm-5 mt-3"><img src="images/right-arrow.png" className="img-fluid mr-1" /> Back To Login</a>                    
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="pwdrecovery2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="pt-1 pb-5 px-sm-5 px-1">
                <h2 className="s-bold source d-pur">Password Recovery</h2>
                <div className="md-form md-outline mb-0 input-with-pre-icon">
                  <i className="fas fa-pencil-alt clr-orange input-prefix" />
                  <input type="text" id="prefixInside2" className="form-control py-3"  placeholder="Enter Verification Code" />
                </div>
                <div className="text-right">
                  <a href="#_" style={{textDecoration: 'underline', fontSize: '13px'}} className="jost">Resend Code</a>
                </div>
                <a href="#_"><button className="source mt-4" data-toggle="modal" data-target="#pwdrecovery3" data-dismiss="modal" aria-label="Close">Continue</button></a>
                <a href="admin-login.html" className="s-bold f-16 l-black jost d-flex align-items-center justify-content-center mt-sm-5 mt-3"><img src="images/right-arrow.png" className="img-fluid mr-1" /> Back To Login</a>                       
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="pwdrecovery3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
            <div className="modal-content">
              <button type="button" className="close text-right mr-5 mt-4" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="pt-1 pb-5 px-sm-5 px-1">
                <h2 className="s-bold source d-pur">Password Recovery</h2>
                <div className="md-form md-outline input-with-pre-icon">
                  <i className="fas fa-key clr-orange input-prefix" />
                  <input type="text" id="prefixInside2" className="form-control py-3" placeholder="Enter Password" />
                  <i className="fas fa-eye-slash l-grey hide-pass" />
                </div>
                <div className="md-form md-outline input-with-pre-icon">
                  <i className="fas fa-key clr-orange input-prefix" />
                  <input type="text" id="prefixInside2" className="form-control py-3" placeholder="Retype Password" />
                  <i className="fas fa-eye-slash l-grey hide-pass" />
                </div>
                <a href="admin-login.html"><button className="source">Update</button></a>
                <a href="admin-login.html" className="s-bold f-16 l-black jost d-flex align-items-center justify-content-center mt-sm-5 mt-3"><img src="images/right-arrow.png" className="img-fluid mr-1" /> Back To Login</a>                     
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="pr-0">              
            <div className="container-fluid admin-login pl-0">
        <div className="row">
          <div className="col-5 pr-0">
            <div className="admin-login-inner d-flex align-items-center justify-content-center">
              <img src={process.env.PUBLIC_URL+"/images/logo-bg.png"} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
          <form onSubmit={e=>onSubmit(e)}>
            <div className>
              <div className="admin-login-card w-100 p-5">
                <div className="text-left">
                  <h4 className="medium clr-orange">Login To Your Account</h4>
                  <hr className="blue_line bck-orange" />
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-envelope  input-prefix" />
                    <input type="text" id="prefixInside2" className="form-control py-2" value={email} name="email"  placeholder="Enter Email Address" onChange={(e)=>onchange(e)} required />
                  </div>
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-lock  input-prefix" />
                    <input type="text" id="prefixInside2" className="form-control py-2"value={password} name="password" placeholder="Enter Password" onChange={(e)=>onchange(e)} required />
                    <i className="fas fa-eye-slash hide-pass" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" id name className="custom-check" defaultValue="Remember me" />
                      <label className=" p_md l-grey ml-2" htmlFor>Remember me</label>
                    </div>
                    <Link to="/forgotpassword" className="clr-orange">Forgot Password?</Link>
                  </div>
                <a> <button type="submit" className="w-100 mt-4">Login</button></a>
                  <div className="mt-5 text-center">
                    <Link to="/" className="medium clr_grey"><i className="fa fa-arrow-circle-left mr-2" /> Back
                      To Website</Link>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        
        </div>
      </div>
            <ToastContainer autoClose={2000} />
</div> */}
<ToastContainer autoClose={2000} />
            </>


   


    )
}


Login.propTypes={
 login:PropTypes.func.isRequired,
 isAuthenticated:PropTypes.bool 
}
const mapStateToProps = state =>({
isAuthenticated : state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login)
