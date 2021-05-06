import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ReactPaginate from "react-paginate";
import {
  getTrucks,

} from "../../actions/truckActions";
import { Link } from "react-router-dom";
import TruckItem from "./foodTruckItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../../utils/pagination";

const Users = ({
    getTrucks,
  SortAction,

  truck:{Trucks,loading},
  history,
}) => {
  const [currentID, setCurrentID] = useState("");
  const [Selection, setSelection] = useState(1);
  const [blockStatus, setBlockStatus] = useState(1);
  const [OrderState, setOrderState] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(5);

  const blockToggleUser = (id, status) => {
    //  alert(id,""+status)
    setCurrentID(id);

    setBlockStatus(status);

    //  window.jQuery('#userBlocked').modal('show');
  };

  useEffect(() => {
    // alert(Selection)
    getTrucks(page, limit, Selection);
  }, [getTrucks, page, limit, Selection]);

  const toggleOrder = () => {
    const currentState = OrderState === 1 ? -1 : 1;
    setOrderState(currentState);
    return OrderState;
  };
  const handleSelection = () => {
    const currentState = Selection === 1 ? 0 : 1;
    setSelection(currentState);
    return Selection;
  };
  const handleChange = (e) => {
    alert(e.target.value);
    let value = e.target.value;

    setlimit(value);
  };
  const handlePageClick = (data) => {
    let selected = data.selected + 1;
    // console.log(selected)
    setPage(selected);
  };

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
                                  <h1>Food Trucking</h1>
                                </div>
                              </div>
                            </div>
                            <div className="user-listing-top">
                              <div className="row align-items-end d-flex">
                                <div className="col-12 col-lg-7 col-xl-7">
                                  <div className="sort-ban d-flex align-items-center">
                                    <label htmlFor className="d-block">
                                      Sort By
                                    </label>
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <input
                                        type="text"
                                        id="datepicker-2"
                                        placeholder="From"
                                        readOnly
                                        data-type="datepicker"
                                        data-guid="06b1c9b2-0dbe-06cf-2dc8-cd50c63de951"
                                        data-datepicker="true"
                                        className="form-control"
                                        role="input"
                                      />
                                      <span
                                        className="input-group-append"
                                        role="right-icon"
                                      >
                                        <button
                                          className="btn btn-outline-secondary border-left-0"
                                          type="button"
                                        >
                                          <i className="gj-icon">event</i>
                                        </button>
                                      </span>
                                    </div>
                                    <span className="sep">-</span>
                                    <div
                                      role="wrapper"
                                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                                    >
                                      <input
                                        type="text"
                                        id="datepicker-3"
                                        placeholder="To"
                                        readOnly
                                        data-type="datepicker"
                                        data-guid="4d583d03-cd84-3b0c-f787-551556fab058"
                                        data-datepicker="true"
                                        className="form-control"
                                        role="input"
                                      />
                                      <span
                                        className="input-group-append"
                                        role="right-icon"
                                      >
                                        <button
                                          className="btn btn-outline-secondary border-left-0"
                                          type="button"
                                        >
                                          <i className="gj-icon">event</i>
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-lg-5 col-xl-5 text-left d-flex align-items-center filter-ban">
                                  <label htmlFor className="d-block">
                                    Filter By
                                  </label>
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
                                <div
                                  id="DataTables_Table_0_wrapper"
                                  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                                >
                                  <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                      <div
                                        className="dataTables_length"
                                        id="DataTables_Table_0_length"
                                      >
                                        <label>
                                          Show{" "}
                                          <select
                                            name="DataTables_Table_0_length"
                                            aria-controls="DataTables_Table_0"
                                            className="form-control form-control-sm"
                                          >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                          </select>{" "}
                                          entries
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                      <div
                                        id="DataTables_Table_0_filter"
                                        className="dataTables_filter"
                                      >
                                        <label>
                                          Search:
                                          <input
                                            type="search"
                                            className="form-control form-control-sm"
                                            placeholder="Search"
                                            aria-controls="DataTables_Table_0"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <table
                                        className="table table-striped table-bordered zero-configuration dataTable no-footer"
                                        id="DataTables_Table_0"
                                        role="grid"
                                        aria-describedby="DataTables_Table_0_info"
                                      >
                                        <thead>
                                          <tr role="row">
                                            <th
                                              className="sorting_asc"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-sort="ascending"
                                              aria-label="U.ID: activate to sort column descending"
                                              style={{ width: "127px" }}
                                            >
                                              U.ID
                                            </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="User Name: activate to sort column ascending"
                                              style={{ width: "260px" }}
                                            >
                                              User Name
                                            </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Date of enrollment: activate to sort column ascending"
                                              style={{ width: "442px" }}
                                            >
                                              Date of enrollment
                                            </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Status: activate to sort column ascending"
                                              style={{ width: "189px" }}
                                            >
                                              Status
                                            </th>
                                            <th
                                              className="sorting"
                                              tabIndex={0}
                                              aria-controls="DataTables_Table_0"
                                              rowSpan={1}
                                              colSpan={1}
                                              aria-label="Action: activate to sort column ascending"
                                              style={{ width: "190px" }}
                                            >
                                              Action
                                            </th>
                                          </tr>
                                        </thead>
                                        {Trucks.data &&
                                        Object.keys(Trucks).length > 0 ? (
                                          Trucks.data.map((item, index) => (
                                            <TruckItem
                                              key={item._id}
                                              data={item}
                                              perPage={Trucks.perPage}
                                              currentPage={Trucks.currentPage}
                                              index={index}
                                            />
                                          ))
                                        ) : (
                                          <h4>No Trucks found...</h4>
                                        )}
                                      </table>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                      <div
                                        className="dataTables_info"
                                        id="DataTables_Table_0_info"
                                        role="status"
                                        aria-live="polite"
                                      >
                                        Showing 1 to 6 of 6 entries
                                      </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                      <div
                                        className="dataTables_paginate paging_simple_numbers"
                                        id="DataTables_Table_0_paginate"
                                      >
                                        <ul className="pagination">
                                          <Pagination
                                            perPage={Trucks && Trucks.perPage}
                                            total={Trucks && Trucks.total}
                                            handlePageClick={handlePageClick}
                                          />
                                        </ul>
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
        </>
      )}
    </Fragment>
  );
};

Users.propTypes = {
    getTrucks: PropTypes.func.isRequired,
    truck: PropTypes.object.isRequired,
  // UpdateluggerStatus:PropTypes.func.isRequired,
  UpdateUserStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  truck: state.truck,
});

export default connect(mapStateToProps, {
  getTrucks
})(Users);
