import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  Link, useLocation  } from 'react-router-dom';
import { logout } from '../../actions/authAction'
import {getNotifications} from '../../actions/profileAction'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SideBar = ({ auth: { isAuthenticated, loading, user }, profile: { Notifications }, logout }) => {
  const { pathname } = useLocation()

  let notifications = Notifications
  // console.log(notifications) 
  const [toggle, setToggle] = useState(false)
  const [toggleProduct, setToggleProduct] = useState(false)
  useEffect(() => {
    if (isAuthenticated) {
      // getNotifications();
    }
  }, [isAuthenticated]);

  const toggleMenu = () => {
    document.querySelector('body').classList.toggle('menu-collapsed')
  }
  // const getCount = ()=>{
  //   let count = 0
  //   if(Object.keys(notifications).length>0){

  //     let newNotification  = notifications.map(noti  => noti.isread==false)
  //      count= newNotification.length
  //   }
  //   return count

  // }

  const authLinks = (
    <div>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu font-large-1" /></a></li>
              <li className="nav-item mt-1"> <a className="navbar-brand" href="dashboard.html"> <img className="brand-logo img-fluid" alt="stack admin logo" src="images/logo.png" /> </a> </li>
              <li className="nav-item d-md-none"> <a className="nav-link open-navbar-container" data-toggle="collapse" data-target="#navbar-mobile"><i className="fa fa-ellipsis-v" /></a> </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-notification nav-item" id="hoverbell"> <a className="nav-link py-0 nav-link-label mt-2" href="#" data-toggle="dropdown">
                  <i className="fa fa-bell" aria-hidden="true" />
                  <i className="fas fa-chevron-down" />
                </a>
                  <ul className="dropdown-menu noti dropdown-menu-media dropdown-menu-right">
                    <li className="scrollable-container media-list ps-container ps-theme-dark ps-active-y" data-ps-id="75e644f2-605d-3ecc-f100-72d86e4a64d8">
                      <a href="notifications.html">
                      </a><div className="media"><a href="notifications.html">
                        <div className="align-self-center">
                          <i className="fas fa-bell notifications-bell" />
                        </div>
                      </a><div className="media-body"><a href="notifications.html">
                        <p className="notification-text jost f-13 medium" style={{ color: '#141414' }}>New user has been registered
                            on the platform</p>
                      </a><div className="notification-below-info"><a href="notifications.html">
                      </a>
                            <small>
                              <time className="media-meta red jost f-13" dateTime="2015-06-11T18:29:20+08:00">May 2,2020</time>
                            </small>
                            <small className="float-right">
                              <time className="media-meta red jost f-13" dateTime="2015-06-11T18:29:20+08:00">10:30 PM</time>
                            </small>
                            <a className="dropdown-item bold f-13 text-left pl-0" style={{ color: '#EBB517!important', textDecoration: 'underline' }} href="notifications.html">View
                            All</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown d-flex align-items-center dropdown-user nav-item"> <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> <span className="avatar avatar-online"> 
                <img src={user&& user.image?user.image:"app-assets/images/portrait/small/avatar-s-1.png"} alt="avatar" /> </span>
                  <span className="user-name">{user&&user.firstname} <i className="fas ml-1 fa-chevron-down" /></span></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/profile"><i className="fas fa-user-circle" />Profile</Link>
                    <a className="dropdown-item" onClick={()=>logout()} ><i className="fas fa-sign-out-alt" />Logout</a>
                  </div>
                </li>
                <li className="nav-item d-none d-md-block"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ft-menu" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
     
      <div className="main-menu menu-fixed menu-light pur-bck menu-accordion" data-scroll-to-active="true">
        <div className="main-menu-content">
          <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li className={`nav-item ${pathname=='/dashboard'?"active":""}`}><Link to="/dashboard"><i className="fas fa-th-large" /><span className="menu-title" data-i18n>Dashboard</span></Link></li>
            <li  className={`nav-item ${pathname=='/users'?"active":""}`}><Link to="/users"><i className="fas fa-user-friends" /><span className="menu-title" data-i18n>User Management</span></Link></li>
            <li className={`nav-item ${pathname=='/surgeons'?"active":""}`} data-toggle="tooltip" data-placement="right" title="Surgeon Management"><Link to="/surgeons"><i className="fa fa-user-circle" /><span className="menu-title" data-i18n>Surgeon Management</span></Link></li>
            <li  className={`nav-item ${pathname=='/service'?"active":""}`}><Link to="/service"><i className="fas fa-cog" /><span className="menu-title" data-i18n>Service Management</span></Link></li>
            <li  className={`nav-item ${pathname=='/slots'?"active":""}`}><Link to="/slots"><i className="far fa-clock" /><span className="menu-title" data-i18n>Slot management</span></Link></li>
            <li  className={`nav-item ${pathname=='/payment'?"active":""}`}><Link to="/payment"><i className="fas fa-credit-card" /><span className="menu-title" data-i18n>Payment Log</span></Link></li>
            <li  className={`nav-item ${pathname=='/booking'?"active":""}`}><Link to="/booking"><i className="fas fa-file" /><span className="menu-title" data-i18n>Booking Log</span></Link></li>
            <li  className={`nav-item ${pathname=='/feedback'?"active":""}`}><Link to="/feedback"><i className="fas fa-comment-alt" /><span className="menu-title" data-i18n>Feedback</span></Link></li>
          </ul>
        </div>
      </div>
    </div>



  )

  return (
    <div>

      {!loading && (<Fragment>{isAuthenticated ? authLinks : ""}</Fragment>)}


    </div>

  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { logout })(SideBar)

