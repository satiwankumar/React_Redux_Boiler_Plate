import React ,{useState}from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {Link,Redirect} from 'react-router-dom'
import {resetPassword} from '../../actions/authAction'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ResetPassword = ({resetPassword,isAuthenticated, code,history },) => {
    const [formData,setFormData] = useState({
      
        newPassword:"",
        confirmPassword:""
       
        
        
    
    });
    // useEffect(() => {
    //     setFormData({
          
    //         resetCode:loading || !code ? '' : code

    //     });

    //   }, [loading,code]);
    
 

const {newPassword,confirmPassword} = formData
const onchange=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})

}


const onSubmit= async(e)=>{
    e.preventDefault()
console.log(newPassword,confirmPassword,code)
    resetPassword(newPassword,confirmPassword,code,history)
 

}





  if(isAuthenticated){
    return <Redirect to="/dashboard"/>

  }
  

    return (
      //   <div>
      //   <section className="register forget-pass">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-2 col-xl-3"></div>
      //       <div className="col-md-8 col-xl-6 col-12">
      //         <div className="register-main">
      //           <form onSubmit={e=>onSubmit(e)}>
      //             <img src="images/logo.png" className="img-full" alt="logo"/>
      //             <div className="form-main">
      //             <div className="row">
      //               <div className="col-md-12 text-center">
      //                  <h1>Password Recovery</h1>
      //               </div>
      //             </div>
               
                  
      //             <div className="fields">
      //               <div className="row">
                      
      //               <div className="col-md-12 email-input-sec mb-2">
      //               <i className="fa fa-lock"></i><input type="password" className="form-control" spellcheck="true" value={newPassword} name="newPassword"  placeholder="Enter new Password" onChange={(e)=>onchange(e)}/>
      //             </div>
      //             <div className="col-md-12 email-input-sec pass-see-icon">
      //             <i className="fa fa-lock"></i><input type="password" spellcheck="true" className="form-control" value={confirmPassword} name="confirmPassword" placeholder="Retype Password" onChange={(e)=>onchange(e)}/>
                 
      //           </div>
                      
                     
      //               </div><br/>
      //               <button type="submit" className="form-control continue-button">continue</button>
      //               <div className="new-user">
                
      //                 <Link to="/" className="login back"><i className="fa fa-long-arrow-left"></i>back to login</Link>
      //                 </div>
      //             </div>
              
              
               
                
      //         </div>
      //         </form>
      //       </div>
              
      //     </div>
      //     <div className="col-md-2 col-xl-3"></div>
      //   </div>
      //   </div>

      // </section>
      <div>
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
                  <h4 className="medium clr-orange">Password Recovery</h4>
                  <form onSubmit={e=>onSubmit(e)}>
                  <hr className="blue_line bck-orange" />
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-key  input-prefix active" />
                    <input type="text" id="prefixInside2" className="form-control py-2" placeholder="Enter New Password"  value={newPassword} name="newPassword"  placeholder="Enter new Password" onChange={(e)=>onchange(e)}/>
                    <i className="fas fa-eye-slash hide-pass active" />
                  </div>
                  <div className="md-form md-outline input-with-pre-icon">
                    <i className="fas fa-key  input-prefix active" />
                    <input type="text" id="prefixInside2" className="form-control py-2" placeholder="Retype Password" value={confirmPassword} name="confirmPassword" placeholder="Retype Password" onChange={(e)=>onchange(e)} />
                    <i className="fas fa-eye-slash hide-pass active" />
                  </div>
                  <a ><button type="submit" className="w-100 mt-2">Update</button></a>
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
ResetPassword.propTypes = {

resetPassword: PropTypes.func.isRequired,
isAuthenticated:PropTypes.bool,
passwordRecovery: PropTypes.bool,
code:PropTypes.string,
};
const mapStateToProps = (state) => ({
  passwordRecovery:state.passwordRecovery,
 isAuthenticated : state.auth.isAuthenticated,
 code:state.auth.code
 

});

export default connect(mapStateToProps, {resetPassword })(ResetPassword);

