
import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import ReactPaginate from 'react-paginate';
import { getFeedbacks,SortAction,deleteFeedback } from '../../actions/feedbackAction';
import {Link } from 'react-router-dom'
import FeedbackItem from './FeedbackItem';
import { ToastContainer } from "react-toastify";
import Pagination from '../../utils/pagination';
// import { deleteReport } from '../../actions/reports';


const Feedback = ({ getFeedbacks,deleteFeedback,SortAction,feedbacks:{loading,Feedbacks}}) => {


  const [currentID, setCurrentID] = useState('')
  const [OrderState,setOrderState] = useState(1)
  const [page, setPage] = useState(1)
  const [limit,setlimit] = useState(5)
     


  useEffect(() => {
// alert(Selection)
getFeedbacks(page,limit)
  }, [getFeedbacks,page,limit]);

  const handleDelete  = (Id)=>{
    // alert("Id,ID",Id)
    setCurrentID(Id)
  }
  
  const toggleOrder=()=>{
    const currentState = OrderState ===1?-1:1
      setOrderState(currentState)
      return OrderState
  }
//   const handleSelection=()=>{
//     const currentState = Selection==1?0:1
//       setSelection(currentState)
//       return Selection
//   }
  const handleChange=(e)=> {
    // alert(e.target.value)
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
        <Fragment>
           <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card px-lg-4 px-2 user-management jost pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body table-responsive card-dashboard">
                        <h1 className="pull-left source d-pur f-32 s-bold mt-2">Feedback</h1>
                        <div className="clearfix" />
                        <div className="row mt-1">
                          <div className="col-12">
                            <div className="d-flex align-items-center">
                              <p className="l-grey source f-20 d-lg-inline-block">Sort By:</p>
                              <div className="ml-2">
                                <p className="l-grey source mb-1">From</p>
                                <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input id="datepicker" className="sort-date customdate form-control" data-type="datepicker" data-guid="28cf0a4b-187b-89c7-4252-d2e3d1727cd0" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="fa fa-calendar" aria-hidden="true" /></button></span></div>                       
                              </div>
                              <div className="ml-2">
                                <p className="l-grey source mb-1">To</p>
                                <div role="wrapper" className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"><input id="datepicker2" className="sort-date customdate form-control" data-type="datepicker" data-guid="76909174-badc-d539-ffe2-02d2e6bc4d48" data-datepicker="true" role="input" /><span className="input-group-append" role="right-icon"><button className="btn btn-outline-secondary border-left-0" type="button"><i className="fa fa-calendar" aria-hidden="true" /></button></span></div>                       
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="maain-tabble">
                          <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-striped table-bordered zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                  <thead>
                                    <tr role="row"><th className="d-grey bold sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.NO: activate to sort column descending" style={{width: '173px'}}>S.NO</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="USer ID: activate to sort column ascending" style={{width: '236px'}}>USer ID</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="user name: activate to sort column ascending" style={{width: '327px'}}>user name</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending" style={{width: '293px'}}>Date</th><th className="d-grey bold sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Manage: activate to sort column ascending" style={{width: '72.6875px'}}>Manage</th></tr>
                                  </thead>
                                  {Feedbacks.data&&
           Object.keys(Feedbacks).length > 0 ? (
            Feedbacks.data.map((item,index) => (
           <FeedbackItem key={item._id} data={item} handleDelete={handleDelete} perPage={Feedbacks.perPage} currentPage={Feedbacks.currentPage} index={index} />
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
                                          <Pagination perPage={Feedbacks && Feedbacks.perPage} total={Feedbacks && Feedbacks.total} handlePageClick={handlePageClick} />

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
            </section>
            {/* // Basic form layout section end */}
          </div>
        </div>
      </div>
          </Fragment>


     
  )}
  </Fragment>
  )
};

Feedback.propTypes = {
  getFeedbacks: PropTypes.func.isRequired,



};

const mapStateToProps = (state) => ({
  feedbacks: state.feedback,
});

export default connect(mapStateToProps, { getFeedbacks,SortAction,deleteFeedback })(Feedback);
