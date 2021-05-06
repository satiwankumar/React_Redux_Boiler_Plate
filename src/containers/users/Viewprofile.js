import React, { useEffect, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom'
import { getCurrentProfile, updateProfile, } from '../../actions/profileAction';
import { updatePassword } from '../../actions/authAction'



toast.configure()
const ViewProfile = ({ getCurrentProfile, updateProfile, updatePassword, auth, profile: { currentProfile, loading }, history }) => {

  const [update, setUpdate] = useState(false)

  const [formData, setFormData] = useState({

    firstname: '',
    lastname: '',
    phone_no:'',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    image:''
  });

  const { firstname, lastname, email, phone_no, currentPassword, confirmPassword, newPassword,image } = formData




  useEffect(() => {
    getCurrentProfile();
    if (currentProfile && currentProfile.user) {
      setFormData({
        firstname: loading || !currentProfile.user.firstname ? '' : currentProfile.user.firstname,
        lastname: loading || !currentProfile.user.lastname ? '' : currentProfile.user.lastname,
        phone_no: loading || !currentProfile.user.phone_no ? '' : currentProfile.user.phone_no,
        email: loading || !currentProfile.user.email ? '' : currentProfile.user.email,
        image: loading || !currentProfile.user.image ? '' : currentProfile.user.image


      });
    }

  }, [loading, getCurrentProfile]);



  const onchange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }


  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("firstname,lastname")
    updateProfile(firstname, lastname,phone_no, history)
    setUpdate(false)

  }
  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    // console.log("firstname,lastname")

    updatePassword(currentPassword, confirmPassword, newPassword, history)
    setFormData({

      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    // e.target.reset()
  }


  return (



    <Fragment>

      {currentProfile !== null ? (
        <Fragment>

<div>
        <div className="app-content content admin-profile dashboard">
          <div className="content-wrapper">
            <div className="content-body">
              {/* Basic form layout section start */}
              <section id="configuration">
                <div className="row">
                  <div className="col-12">
                    <div className="card rounded pad-20">
                      <div className="card-content collapse show">
                        <div className="card-body">
                          <div className="page-title">
                            <div className="row">
                              <div className="col-12">
                                <h1>My Profile</h1>
                              </div>   
                            </div>
                          </div>
                          <div className="user-detail-block">
                            <div className="user-name">
                              <div className="row">
                                <div className="col-xl-11 col-12">
                                  <div className="media d-sm-flex d-block">
                                    <div className="media-left">
                                      <img src={image?image:"images/avatar.jpg"} className="img-fluid ml-0" alt="" />
                                    </div>
                                    <div className="media-body">
                                      <h3>Mark Carson</h3>
                                      <div className="user-info">
                                        <div className="row detail-row d-flex align-items-center">
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 lablename">First Name:</div>
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3">{firstname}</div>
                                        </div>
                                        <div className="row detail-row d-flex align-items-center">
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 lablename">Last Name:</div>
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3">{lastname}</div>
                                        </div>
                                        <div className="row detail-row d-flex align-items-center">
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 lablename">Email:</div>
                                          <div className="col-12 col-md-6 col-lg-4 col-xl-3">{email}</div>
                                        </div>
                                        <div className="row detail-row">
                                          <div className="col-12 col-md-12">
                                            <a to="/edit-profile" className="btn-default outline-btn btn-sml">Edit </a>
                                            <a href="#" className="btn-default fill-btn">change password</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>	
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/*change password modal start here*/}
        <div className="login-fail-main">
          <div className="featured inner">
            <div className="modal fade another-modal change-password-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">   
              <div className="modal-dialog modal-lgg">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                  <div className="payment-modal-main">
                    <div className="payment-modal-inner"> <img src="images/payme.png" className="img-fluid" alt="" />
                      <h1>Change Password</h1>
                      <form action>
                        <div className="row">
                          <div className="col-12 form-group">
                            <label htmlFor>Current Password</label>
                            <input type="password" placeholder="Enter Current Password" className="form-control" />
                            <button className="view" type="button"><i className="fa fa-eye" /></button>
                          </div> 
                          <div className="col-12 form-group">
                            <label htmlFor>New Password</label>
                            <input type="password" placeholder="Enter New Password" className="form-control" />
                            <button className="view" type="button"><i className="fa fa-eye" /></button>
                          </div> 
                          <div className="col-12 form-group">
                            <label htmlFor>Retype Password</label>
                            <input type="password" placeholder="Retype Password" className="form-control" />
                            <button className="view" type="button"><i className="fa fa-eye" /></button>
                          </div> 
                        </div>
                        <div className="row">
                          <div className="col-12 text-center">
                            <button type="submit" className="orange-btn">update </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </Fragment>


      ) : '<h1>user Details doesonot found</h1>'

      }
    </Fragment>

  )
}

ViewProfile.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { updateProfile, getCurrentProfile, updatePassword })(withRouter(ViewProfile));
{
//   <section className="admin-profile">
//   <div className="app-content content">
//     <div className="content-wrapper">
//       <div className="content-body">
//         {/* Basic form layout section start */}
//         <section id="configuration user-management">
//           <div className="row">
//             <div className="col-12">
//               <div className="card jost pad-20 pb-5 px-lg-4 px-2">
//                 <div className="card-content collapse show">
//                   <div className="card-body table-responsive card-dashboard">
//                     <a onClick={()=>history.goBack()}><h1 className="pull-left source d-pur f-32 s-bold mt-2"><i className="fas fa-arrow-left" /> Edit Profile</h1></a>
//                     <div className="clearfix" />
//                     <div className="dash-card-inner mt-2">
//                       <div className="d-flex align-items-center justify-content-center mt-lg-3 mt-0">
//                         <img src="images/user-icon.png" alt="" className="img-fluid" />
//                         <label htmlFor="picture">
//                           <i className="fas fa-camera profile-pic-icon" />
//                         </label>
//                         <form  style={{display: 'none'}}>
//                           <input type="file" name="pic" accept=".gif,.jpg,.png,.tif|image/*" id="picture" />
//                           <input type="submit" />
//                         </form>
//                       </div>
//                       <form onSubmit={(e)=>onSubmit(e)}>
//                       <div className="row mt-lg-2 mt-0">
//                         <div className="col-lg-4 col-12 offset-lg-2 mt-0">
//                           <p className="jost medium black p_lg mb-1">First Name</p>
//                           <input type="text" value={firstname}  className="w-100" name="firstname" onChange={(e) => onchange(e)}  className="form-control" defaultValue="Mark" disabled={!update?"true":""} required />                          
//                         </div>
//                         <div className="col-lg-4 col-12 mt-lg-0 mt-1">
//                           <p className="jost medium black p_lg mb-1">Last Name</p>
//                           <input type="text" value={lastname}  className="w-100" name="lastname" onChange={(e) => onchange(e)}  className="form-control" defaultValue="Carson"  disabled={!update?"true":""} required/>  
//                         </div>
//                       </div>
//                       <div className="row mt-lg-2 mt-1">
//                         <div className="col-lg-4 col-12 offset-lg-2 mt-lg-0 mt-1">
//                           <p className="jost medium black p_lg mb-1">Phone Number</p>
//                           <input type="text"  value={phone_no}  className="w-100" name="phone_no" onChange={(e) => onchange(e)} className="form-control" defaultValue="+012 3456 789" disabled={!update?"true":""} />                          
//                         </div>
//                         <div className="col-lg-4 col-12 mt-lg-0 mt-1">
//                           <p className="grey source s-bold p_lg">Email Address</p>
//                           <p className="jost medium black p_lg">{email}</p>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-12 text-center">
//                           <a href="edit-user-profile.html" data-toggle="modal" data-target="#changepwd"><button className="mt-46 blackbtn">Change Password</button></a>
//                           {
//                             !update?
//                           <a ><a  onClick={()=>setUpdate(!update)} className="px-4 mx-1 py-1 mt-2">Update</a></a>:

//                           <a><button type="submit" className="px-4 mx-1 py-1 mt-2">Save</button></a>                          

//                           }

//                         </div>
//                       </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="modal fade" id="changepwd" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered " role="document">
//             <div className="modal-content">
//               <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">×</span>
//               </button>
//               <div className="px-5 pt-3 pb-5 text-center">
//                 <h3 className="source s-bold mt-1 f-36 d-pur">Change Password</h3>
//                 <p className="s-bold source p-md mt-2 text-left" style={{color: '#0A0A13'}}>Current Password</p>
//                 <fieldset className="form-group position-relative w-100">
//                   <div className="form-control-position form-control-position1">
//                     <i className="fas fa-lock changelock" style={{color: '#F5C12A !important', fontSize: '18px !important'}} />                          
//                   </div>
//                   <input type="password" className="form-control mt-1 categorymodal2 " id="iconLeft7" placeholder="Enter Current Password" />
//                   <div className="form-control-position">
//                     <i className="fas fa-eye-slash" />
//                   </div>
//                 </fieldset>
//                 <p className="s-bold source p-md mt-2 text-left" style={{color: '#0A0A13'}}>New Password</p>
//                 <fieldset className="form-group position-relative w-100">
//                   <div className="form-control-position form-control-position1">
//                     <i className="fas fa-lock changelock" style={{color: '#F5C12A !important', fontSize: '18px !important'}} />                          
//                   </div>
//                   <input type="password" className="form-control mt-1 categorymodal2 " id="iconLeft7" placeholder="Enter Current Password" />
//                   <div className="form-control-position">
//                     <i className="fas fa-eye-slash" />
//                   </div>
//                 </fieldset>
//                 <p className="s-bold source p-md mt-2 text-left" style={{color: '#0A0A13'}}>Confirm Password</p>
//                 <fieldset className="form-group position-relative w-100">
//                   <div className="form-control-position form-control-position1">
//                     <i className="fas fa-lock changelock" style={{color: '#F5C12A !important', fontSize: '18px !important'}} />                          
//                   </div>
//                   <input type="password" className="form-control mt-1 categorymodal2 " id="iconLeft7" placeholder="Enter Current Password" />
//                   <div className="form-control-position">
//                     <i className="fas fa-eye-slash" />
//                   </div>
//                 </fieldset>
//                 <div className="d-flex flex-wrap justify-content-center">
//                   <a href="#_" aria-label="Close" data-dismiss="modal" data-toggle="modal" data-target="#confirmpwd"><button className="px-4 mx-1 py-1 mt-2">Update</button></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="modal fade" id="confirmpwd" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered " role="document">
//             <div className="modal-content">
//               <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">×</span>
//               </button>
//               <div className="px-5 pt-3 pb-5 text-center">
//                 <img src="images/green-check.png" alt="" className="img-fluid" />
//                 <h3 className="source s-bold mt-1 f-36 d-pur">Confirmation</h3>
//                 <p className="d-pur mt-1 medium f-19 jost">User profile has been updated successfully</p>
//                 <div className="text-center">
//                   <a href="#_" data-dismiss="modal" aria-label="Close"><button className="px-3 mx-1 py-1 mt-2">Close</button></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* // Basic form layout section end */}
//       </div>
//     </div>
//   </div>
// </section>

//     <ToastContainer autoClose={3000} />
//   </Fragment>



}