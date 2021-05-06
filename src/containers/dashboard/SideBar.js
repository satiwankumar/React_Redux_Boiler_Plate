import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, useLocation } from "react-router-dom";
import { logout } from "../../actions/authAction";
import { getNotifications } from "../../actions/profileAction";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = ({
  auth: { isAuthenticated, loading, user },
  profile: { Notifications },
  logout,
}) => {
  const { pathname } = useLocation();
  const [menu, setmenu] = useState(false);
  let notifications = Notifications;
  // console.log(notifications)
  const [toggle, setToggle] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      getNotifications();
    }
  }, [isAuthenticated]);

  const toggleMenu = () => {
    document.querySelector("body").classList.toggle("menu-collapsed");
  };
  // const getCount = ()=>{
  //   let count = 0
  //   if(Object.keys(notifications).length>0){

  //     let newNotification  = notifications.map(noti  => noti.isread==false)
  //      count= newNotification.length
  //   }
  //   return count

  // }
  const togglemenu = () => {
    setmenu(!menu);
  };
  const authLinks = (
    <div>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="navbar-brand" to="/dashboard">
                  {" "}
                  <img
                    className="brand-logo img-fluid"
                    alt="stack admin logo"
                    src="images/logo.png"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-item d-md-none">
                {" "}
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left"></ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-notification nav-item">
                  {" "}
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-bell" />{" "}
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up">
                      5
                    </span>{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        {" "}
                        <span className="grey darken-2">
                          Notifications
                        </span>{" "}
                        <span className="notification-tag badge badge-default badge-danger float-right m-0">
                          5 New
                        </span>{" "}
                      </h6>
                    </li>
                    <li
                      className="scrollable-container media-list ps-container ps-theme-dark ps-active-y"
                      data-ps-id="75e644f2-605d-3ecc-f100-72d86e4a64d8"
                    >
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="javascript:void(0)">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="icon-bg-circle" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new notification!
                            </h6>
                            <small>
                              <time
                                className="media-meta text-muted"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <Link
                        className="dropdown-item text-muted text-center"
                        to="/notifications"
                      >
                        Read all notifications
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span className="avatar avatar-online">
                      {" "}
                      <img src="images/avatar.jpg" alt="avatar" />{" "}
                    </span>
                    <span className="user-name">{user&&user.firstname+" " + user.lastname}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/profile">
                      <i className="fa fa-user-circle" />
                      Profile
                    </Link>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target=".profile-logout"
                    >
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </div>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                    href="#"
                  >
                    <i className="ft-menu" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="main-menu menu-fixed menu-light menu-accordion"
        data-scroll-to-active="true"
      >
        <div
          className="main-menu-content ps-container ps-theme-dark"
          data-ps-id="3188a7ce-29af-968d-911a-685a895940fe"
          style={{ height: "818px" }}
        >
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className={`nav-item `}>
              <Link to="/">
                <i className="fa fa-chart-area" />
                <span className="menu-title" data-i18n>
                  Dashboard{" "}
                </span>
              </Link>
            </li>
            <li
              className={`nav-item has-sub ${menu ? "open" : ""} ${
                pathname == "/users" ? "active" : ""
              }`}
            >
              <Link onClick={togglemenu}>
                <i className="fa fa-user-circle" />
                <span className="menu-title" data-i18n>
                  User Management
                </span>
              </Link>
              <ul className="menu-content" style={{}}>
                <li
                  className={`is-shown ${pathname == "/users" ? "active" : ""}`}
                >
                  <Link className="menu-item" to="/users">
                    User
                  </Link>
                </li>
                <li
                  className={`is-shown ${
                    pathname == "/food-trucks" ? "active" : ""
                  }`}
                >
                  <Link className="menu-item" to="/food-trucks">
                    Food Truck
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/feedback">
                <i className="fa fa-comments" />
                <span className="menu-title" data-i18n>
                  feedback{" "}
                </span>
              </Link>
            </li>
          </ul>
          <div
            className="ps-scrollbar-x-rail"
            style={{ left: "0px", bottom: "3px" }}
          >
            <div
              className="ps-scrollbar-x"
              tabIndex={0}
              style={{ left: "0px", width: "0px" }}
            />
          </div>
          <div
            className="ps-scrollbar-y-rail"
            style={{ top: "0px", right: "3px" }}
          >
            <div
              className="ps-scrollbar-y"
              tabIndex={0}
              style={{ top: "0px", height: "0px" }}
            />
          </div>
        </div>
      </div>
      <div className="login-fail-main">
        <div className="featured inner">
          <div
            className="modal fade common-modal profile-logout"
            tabIndex
            role
            aria-labelledby
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lgg">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-main">
                  <div className="modal-inner">
                    <form action>
                      <div className="row">
                        <div className="col-12 text-center">
                          <img
                            src="images/cnfrm-icon.png"
                            className="img-fluid"
                            alt=""
                          />
                          <p className>Are you sure you want to logout?</p>
                          <button
                            type="button"
                            onClick={() => logout()}
                            className="btn-default  fill-btn"
                            id
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn-default outline-btn"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            No
                          </button>
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
  );

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : <Redirect to="/" />}</Fragment>
      )}
    </div>
  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(SideBar);
