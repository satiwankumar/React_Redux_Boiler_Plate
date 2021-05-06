
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import ReactPaginate from 'react-paginate';
import { getUsers, UpdateUserStatus,SortAction } from '../../actions/profileAction';
import {Link } from 'react-router-dom'
import UserItem from './userItem';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../../utils/pagination';

const Users = ({ getUsers,SortAction, UpdateUserStatus, profile: { Users, loading }, history }) => {


  const [currentID, setCurrentID] = useState('')
  const [Selection, setSelection] = useState(1)
  const [blockStatus, setBlockStatus] = useState(1)
  const [OrderState,setOrderState] = useState(1)
  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     

   const blockToggleUser = (id,status) => {
    //  alert(id,""+status)
     setCurrentID(id)
    
     setBlockStatus(status)
    

    //  window.jQuery('#userBlocked').modal('show');
   }

  useEffect(() => {
// alert(Selection)
    getUsers(page,limit,Selection);
  }, [getUsers,page,limit,Selection]);


  
  const toggleOrder=()=>{
    const currentState = OrderState ===1?-1:1
      setOrderState(currentState)
      return OrderState
  }
  const handleSelection=()=>{
    const currentState = Selection===1?0:1
      setSelection(currentState)
      return Selection
  }
  const handleChange=(e)=> {
    alert(e.target.value)
    let value = e.target.value;
    
   setlimit(value)
}
const handlePageClick = (data) => {
  
    let selected = data.selected +1;
    // console.log(selected)
    setPage(selected);
   
};
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <>
         <div className="app-content dashboard content user-listing">
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
                              <h1>User</h1>
                            </div>
                          </div>
                        </div>
                        <div className="user-listing-top">
                          <div className="row align-items-end d-flex">
                            <div className="col-12 col-lg-7 col-xl-7">
                              <div className="sort-ban d-flex align-items-center">
                                <label htmlFor className="d-block">Sort By</label> 
                                <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" id="datepicker-2" placeholder="From" readOnly data-type="datepicker" data-guid="06b1c9b2-0dbe-06cf-2dc8-cd50c63de951" data-datepicker="true" className="form-control" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>	
                                <span className="sep">-</span>
                                <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input type="text" id="datepicker-3" placeholder="To" readOnly data-type="datepicker" data-guid="4d583d03-cd84-3b0c-f787-551556fab058" data-datepicker="true" className="form-control" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="gj-icon">event</i></button></span></div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-5 text-left d-flex align-items-center filter-ban">
                              <label htmlFor className="d-block">Filter By</label>
                              <select name className="form-control" id>
                                <option value>Filter</option>
                                <option value>user</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row row-table">                            
                          <div className="main-tabble table-responsive">
                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                    <thead>
                                      <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="U.ID: activate to sort column descending" style={{width: '127px'}}>U.ID</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="User Name: activate to sort column ascending" style={{width: '260px'}}>User Name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Date of enrollment: activate to sort column ascending" style={{width: '442px'}}>Date of enrollment</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{width: '189px'}}>Status</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending" style={{width: '190px'}}>Action</th></tr>
                                    </thead>
                                    {Users.data&&
     Object.keys(Users).length > 0 ? (
      Users.data.map((item,index) => (
     <UserItem key={item._id} data={item}  perPage={Users.perPage} currentPage={Users.currentPage} index={index} />
   ))
 ) : (
   <h4 >No Feedback found...</h4>
 )
}
                           </table></div></div>
                    
                    <div className="row">
                              <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div>
                              <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">

                                  <ul className="pagination">
                                    <Pagination perPage={Users && Users.perPage} total={Users && Users.total} handlePageClick={handlePageClick} />

                                  </ul>


                                </div>





                             </div></div> 
                            
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
          
        </>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  // UpdateluggerStatus:PropTypes.func.isRequired,
  UpdateUserStatus:PropTypes.func.isRequired


};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getUsers, UpdateUserStatus,SortAction })(Users);
{
//   <div className="app-content content">
//   <div className="content-wrapper">
//     <div className="content-body">
//       {/* Basic form layout section start */}
//       <section id="configuration">
//         <div className="row">
//           <div className="col-12">
//             <div className="card px-lg-4 px-2 user-management jost pad-20">
//               <div className="card-content collapse show">
//                 <div className="card-body table-responsive card-dashboard">
//                   <h1 className="pull-left source d-pur f-32 s-bold mt-2">User Management</h1>
//                   <div className="text-right red-btn">
                
//                     <a  className="mr-lg-3"><button onClick={handleSelection} className="px-2 py-1 redbtn"> {Selection===1?"Blocked":"Active"} Users List</button> </a>
//                   </div>
//                   <div className="clearfix" />
//                   <div className="row mt-1">
//                     <div className="col-12">
//                       <div className="d-flex align-items-center">
//                         <p className="l-grey source f-20 d-lg-inline-block">Sort By:</p>
//                         <div className="ml-2">
//                           <p className="l-grey source mb-1">From</p>
//                           <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input id="datepicker" className="sort-date customdate form-control" data-type="datepicker" data-guid="bf22b9d8-b265-ad47-f2c7-6058dd3b3a4a" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="fa fa-calendar" aria-hidden="true" /></button></span></div>                       
//                         </div>
//                         <div className="ml-2">
//                           <p className="l-grey source mb-1">To</p>
//                           <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input id="datepicker2" className="sort-date customdate form-control" data-type="datepicker" data-guid="2f3beb7a-2244-ecef-ddad-ad1ad83c804a" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="fa fa-calendar" aria-hidden="true" /></button></span></div>                       
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="clearfix" />
//                   <div className="maain-tabble">
//                     <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
//                             <thead>
//                               <tr role="row"><th className="d-grey bold sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.NO: activate to sort column descending" style={{width: '82px'}}>S.NO</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="User ID: activate to sort column ascending" style={{width: '118px'}}>User ID</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="User name: activate to sort column ascending" style={{width: '169px'}}>User name</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="registration date: activate to sort column ascending" style={{width: '279px'}}>registration date</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Email address: activate to sort column ascending" style={{width: '224px'}}>Email address</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Phone Number: activate to sort column ascending" style={{width: '228px'}}>Phone Number</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Manage: activate to sort column ascending" style={{width: '72.6875px'}}>Manage</th></tr>
//                             </thead>
//                             <tbody>
                              
//                {Users&&
// Object.keys(Users).length > 1 ? (
// Users.data.map((user,index) => (
// <UserItem key={user._id} blockToggle={blockToggleUser} user={user} currentPage={Users.currentPage} perPage={Users.perPage} index={index} selection={Selection}/>
// ))
// ) : (
// <h4>No User found...</h4>
// )
// }
//                           </tbody>
//                           </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
//                   </div>
//                 </div>
//                 <div className="modal fade" id="blockuser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                   <div className="modal-dialog modal-dialog-centered " role="document">
//                     <div className="modal-content">
//                       <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">×</span>
//                       </button>
//                       <div className="px-5 pt-3 pb-5 text-center">
//                         <img src="images/question.png" alt="" className="img-fluid" />
//                         <h3 className="source s-bold mt-1 f-36 d-pur">System Message</h3>
//                         <p className="d-pur mt-1 medium f-20 jost">Are you sure you want to block this user?</p>
//                         <div className="d-flex flex-wrap justify-content-center">
//                           {/* <a href="#_" data-toggle="modal" data-target="#blockuseradded" data-dismiss="modal" aria-label="Close"> */}
//                            <a>
//                             <button  onClick={()=>UpdateUserStatus(currentID,blockStatus)}   className="px-4 mx-1 py-1 mt-2">Yes</button>
//                             </a>
//                           <a href="#_" data-dismiss="modal" aria-label="Close"><button className="px-4 mx-1 py-1 mt-2">No</button></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="modal fade" id="blockuseradded" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                   <div className="modal-dialog modal-dialog-centered " role="document">
//                     <div className="modal-content">
//                       <button type="button" className="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">×</span>
//                       </button>
//                       <div className="px-5 pt-3 pb-5 text-center">
//                         <img src="images/green-check.png" alt="" className="img-fluid" />
//                         <h3 className="source s-bold mt-1 f-36 d-pur">Confirmation</h3>
//                         <p className="d-pur mt-1 medium f-20 jost">User has been blocked successfully</p>
//                         <div className="text-center">
//                           <a href="#_" data-dismiss="modal" aria-label="Close"><button className="px-3 mx-1 py-1 mt-2">Close</button></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* // Basic form layout section end */}
//     </div>
//   </div>
//   <ToastContainer autoClose={3000}/>
// </div>        
}