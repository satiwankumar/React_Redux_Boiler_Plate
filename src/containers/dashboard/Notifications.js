
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
// import ProfileItem from './ProfileItem';
import ReactPaginate from 'react-paginate';
import { getNotifications } from '../../actions/profileAction';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Notifications = ({ getNotifications, profile: { Users, loading, Notifications }, history }) => {


    // const [notifications, setNotification] = useState({});
    //   const [UsersPerPage] = useState(5);
    const [page, setPage] = useState(1)


    useEffect(() => {

        getNotifications(page);
        // if (Object.keys(Notifications) > 0) {

        //     setNotification(Notifications.data)

        // }

    }, [page]);
 
    const onPage = selectedPage => {
        alert(selectedPage)
        setPage(selectedPage.selected + 1)
    };
    const onPageLoad = () => {
        getNotifications(page)
    }
    const handlePageClick = (data) => {
        console.log(data)
        let selected = data.selected;
        setPage(selected);
       
    };

  
    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                    <Fragment>

<div className="app-content content all-notifications">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body card-dashboard">
                        <div className="page-title">
                          <div className="row">
                            <div className="col-12">
                              <h1>Notifications</h1>
                            </div>   
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="noti-inner-cards">
                              <div className="card">
                                <div className="noti-content">
                                  <div className="media ">
                                    <i className="fa" aria-hidden="true" />
                                    <div className="media-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod adipiscing elit. Aenean euismod </p>
                                      <time className="time-meta" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="noti-inner-cards">
                              <div className="card">
                                <div className="noti-content">
                                  <div className="media ">
                                    <i className="fa" aria-hidden="true" />
                                    <div className="media-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                      <time className="time-meta" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="noti-inner-cards">
                              <div className="card">
                                <div className="noti-content">
                                  <div className="media ">
                                    <i className="fa" aria-hidden="true" />
                                    <div className="media-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                      <time className="time-meta" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="noti-inner-cards">
                              <div className="card">
                                <div className="noti-content">
                                  <div className="media ">
                                    <i className="fa" aria-hidden="true" />
                                    <div className="media-body">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                      <time className="time-meta" dateTime="2015-06-11T18:29:20+08:00">30 minutes ago</time>
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
                      
                    </Fragment>

                )}
        </Fragment>
    );
};

Notifications.propTypes = {
    getUsers: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    // UpdateluggerStatus:PropTypes.func.isRequired,
    getNotifications: PropTypes.func.isRequired


};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getNotifications })(Notifications);
{
//     <div class="app-content content view home all-notifications">
//     <div class="content-wrapper">
//         <div class="content-body">
//             <section id="configuration" class="search view-cause">
//                 <div class="row">
//                     <div class="col-12">
//                         <div class="add-user">
//                             <div class="card rounded pad-20">
//                                 <div class="card-content collapse show">
//                                     <div class="card-body card-dashboard">
//                                         <div class="row">
//                                             <div class="col-12">
//                                                 <h1 class="pull-left notification-head">Notifications</h1>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-12">
//                                                 {
//                                                     Object.keys(Notifications).length > 0 ? (
//                                                         Notifications.data.map(notification => (


//                                                             <div class="noti-inner-cards mb-3">
//                                                                 <div class="card mt-3">


//                                                                     <div class="noti-content">
//                                                                         <div class="media align-items-center">
//                                                                             <i class="fa fa-bell-o" aria-hidden="true"></i>
//                                                                             <div class="media-body">
//                                                                                 <p>{notification.title}</p>
//                                                                                 <small>{notification.date}</small>
//                                                                             </div>
//                                                                             <h5>      10:30 AM</h5>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         ))) : (
//                                                             <h4>No User found...</h4>
//                                                         )

//                                                 }


//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div class="col-12">
// <ul class="noti-pagination pagination pull-right">
//                                 <ReactPaginate
//                                     containerClassName="pagination"
//                                     pageClassName="paginate_button page-item"
//                                     pageLinkClassName="page-link"
//                                     activeClassName="active"
//                                     previousClassName="page-item previous"
//                                     previousLinkClassName="page-link"
//                                     nextClassName=" page-item next"
//                                     nextLinkClassName="page-link"
//                                     activeLinkClassName="active"
//                                     previousLabel={'previous'}
//                                     nextLabel={'next'}
//                                     breakLabel={'...'}
//                                     breakClassName={'break-me'}
//                                     pageCount={Notifications.total}
//                                     marginPagesDisplayed={2}
//                                     pageRangeDisplayed={Notifications.limit}
//                                     onPageChange={handlePageClick}
//                                     containerClassName={'pagination'}
//                                     subContainerClassName={'pages pagination'}
//                                     activeClassName={'active'}
//                                 />
//                                 </ul>
//                                 </div>
                            
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>


//         </div>
//     </div>
// </div>




// <div class="modal fade" id="UnblockedUser" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//         <div class="modal-content">
//             <div class="modal-header">

//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <i class="fa fa-times-circle"></i>
//                 </button>
//             </div>
//             <div class="modal-body">
//                 <div class="blocked-modal-main-wrapper text-center">
//                     <div class="img-wrapper text-center">
//                         <img src="images/trashicon.png" alt="" />
//                         <p class="mb-0">Are you sure you want to Delete this Task?</p>
//                     </div>
//                     <a href="#" class="blocked-button">No</a>
//                     <a href="login.html" class="cancel-button">yes</a>
//                 </div>
//             </div>

//         </div>
//     </div>
// </div>

}