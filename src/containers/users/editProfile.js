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
                                    <div className="media-left" style={{
                                        borderRadius: 60
                                    }}>
                                      <img src={image?image:"images/avatar.jpg"}  className="img-fluid ml-0" alt="" />
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
