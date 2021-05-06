import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  login,
  forgotPassword,
  resetPassword,
  verifyCode,
} from "../../actions/authAction";

const Login = ({
  isAuthenticated,
  isAdmin,
  login,
  forgotPassword,
  resetPassword,
  code,
  verifyCode,
  history,
}) => {
  // const [refresh, setstate] = useState(false)
  const [passtype, Setpasstype] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    forgotemail: "",
    resetCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const {
    email,
    password,
    forgotemail,
    resetCode,
    newPassword,
    confirmPassword,
  } = formData;
  const onchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("email,password");
    // console.log(email,password)
    login(email, password, "ADMIN");
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    console.log(forgotemail);
    // alert("called")
    forgotPassword(forgotemail, history);
  };

  const handleVerfyCode = async (e) => {
    e.preventDefault();
    // console.log(resetCode)
    verifyCode(resetCode, history);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    console.log(newPassword, confirmPassword, code);
    resetPassword(newPassword, confirmPassword, code, "admin", history);
  };

  //Redirect if logged int
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <section className="login-main">
        <div className="container">
          <div className="login-inner">
            <div className="row">
              <div className="col-lg-6 col-12 d-flex align-items-stretch">
                <div className="left d-flex align-items-center justify-content-center">
                  <img
                    src="images/logo-login.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="right">
                  <h1 className>Login</h1>
                  <h6>Login to Your Account</h6>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="row">
                      <div className="col-12 form-group">
                        <label htmlFor className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          name="email"
                          placeholder="Enter Email Address"
                          onChange={(e) => onchange(e)}
                          required
                        />
                      </div>
                      <div className="col-12 form-group position-relative">
                        <label htmlFor className="form-label">
                          Password
                        </label>
                        <input
                          type={passtype == false ? "password" : "text"}
                          className="form-control enter-input"
                          value={password}
                          name="password"
                          placeholder="Enter Password"
                          onChange={(e) => onchange(e)}
                          required
                        />
                        <button
                          type="button"
                          className="view-btn position-absolute"
                        >
                          {" "}
                          <i
                            className="fa fa-eye-slash enter-icon right-icon"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className>
                        <label className="login-check">
                          Remember Me
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className>
                        {" "}
                        <a
                          href="#"
                          className="forgot"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          {" "}
                          Forgot Password?
                        </a>{" "}
                      </div>
                    </div>
                    <div className="d-block col-12 text-center">
                      <button type="submit" className="btn-default login">
                        login
                      </button>
                    </div>
                    <div className="d-block col-12 text-center bck-text">
                      <Link to="/">Back to Website</Link>
                    </div>
                  </form>
                  {/*login modal start here*/}
                  {/* Modal */}
                  <div
                    className="modal login-modal fade modal-1"
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="forget-pass">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <h1>Password Recovery</h1>
                            <h4>
                              Please Enter Your Email Address To Recover Your
                              Password
                            </h4>
                            <form onSubmit={(e) => handleForgot(e)}>
                              <div className="row">
                                <div className="col-12 form-group">
                                  <label htmlFor className="form-label">
                                    Email address
                                  </label>
                                  <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="form-control"
                                    name="forgotemail"
                                    onChange={(e) => onchange(e)}
                                    placeholder="Enter Email Address"
                                    required
                                  />
                                  <button type="submit" className="btn-default">
                                    {" "}
                                    Continue{" "}
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal login-modal fade modal-1"
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="forget-pass">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <h1>Password Recovery</h1>
                            <h4>
                              Please Enter Your Email Address To Recover Your
                              Password
                            </h4>
                            <form
                              onSubmit={(e) => {
                                handleVerfyCode(e);
                              }}
                            >
                              <div className="row">
                                <div className="col-12 form-group">
                                  <label htmlFor className="form-label">
                                    verification code
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Verification Code"
                                    value={resetCode}
                                    name="resetCode"
                                    onChange={(e) => onchange(e)}
                                    required
                                  />
                                  <button type="submit" className="btn-default">
                                    {" "}
                                    Continue{" "}
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*login modal end here*/}
                  {/*forgot step 2 start here*/}
                  {/* Button trigger modal */}
                  <div
                    className="modal fade login-modal modal-2"
                    id="password-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="forget-pass">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="modal-body">
                            <h1>Password Recovery</h1>
                            <form>
                              <div className="row">
                                <div className="col-12 form-group">
                                  <label htmlFor className="form-label">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control enter-input"
                                    placeholder="Password"
                                  />
                                  <button className="view-btn position-absolute">
                                    {" "}
                                    <i
                                      className="fa fa-eye-slash enter-icon right-icon"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                                <div className="col-12 form-group confrm-pass">
                                  <label htmlFor className="form-label">
                                    Confirm Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control enter-input"
                                    placeholder="Confirm Password"
                                  />
                                  <button className="view-btn position-absolute">
                                    {" "}
                                    <i
                                      className="fa fa-eye-slash enter-icon right-icon"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                                <div className="col-12 text-center">
                                  <button
                                    type="button"
                                    className="btn-default"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*forgot step 2 end here*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
