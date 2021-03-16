import React, { useEffect, Fragment, useState } from 'react'
import { Link, withRouter, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { getDashboard } from '../../containers/dashboard'
import { Bar } from "react-chartjs-2";
import { logout } from '../../actions/authAction'
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
  datasets: [
    {
      label: 'No of Orders',
      data: [3, 2, 2, 6, 4, 5, 4, 5, 4, 8, 4, 6, 4],
      borderColor: [
        'rgba(0, 0, 0, 0.7)',
        'rgba(0, 0, 0, 0.7)'

      ],
      backgroundColor: [
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',
        'rgba(237,148, 29,1)',


      ]
    }
    // {
    //   label: '',
    //   data: [4, 3, 2, 2, 3],
    //   borderColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ],
    //   backgroundColor: [
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(54, 162, 235, 0.2)'
    //   ]
    // }
  ]
}

const options = {
  title: {
    display: true,
    text: 'Bar Chart'
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 6,
          stepSize: 1
        }
      }
    ]
  }
}

const Dashboard = ({ getDashboard, logout, dashboard: { Dashboard } }) => {
  useEffect(() => {

    // getDashboard()
  }, [])



  return (
    <div className="app-content user-management content">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card jost pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body table-responsive card-dashboard">
                        <h1 className="pull-left source d-pur f-32 s-bold mt-2">Quick Stats</h1>
                        <div className="clearfix" />
                        <div className="row mt-md-2 mt-1">
                          <div className=" offset-md-2 col-md-4 col-12 text-center">
                            <div className=" circlebox">
                              <div className="c100 p100 big light-bloo"> <span>100%</span>
                                <div className="slice">
                                  <div className="bar" />
                                  <div className="fill" />
                                </div>
                              </div>
                              <h6 className="source f-20 s-bold d-pur mt-2">Average Monthly Income</h6>
                            </div>
                          </div>
                          <div className="col-md-4 col-12 text-center mt-md-0 mt-1">
                            <div className=" circlebox">
                              <div className="c100 p100 big bloo"> <span>100%</span>
                                <div className="slice">
                                  <div className="bar" />
                                  <div className="fill" />
                                </div>
                              </div>
                              <h6 className="source f-20 s-bold d-pur mt-2">Average Yearly Income</h6>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-md-3 mt-2">
                          <div className="col-12">
                            <div className="d-md-flex align-items-center justify-content-center dash-registered">
                              <i className="fas fa-user-friends dash-user" />
                              <h3 className="source s-bold f-26 mx-md-1 mx-0 mt-md-0 mt-1">Registered<br />Users</h3>
                              <h2 className="jost bold f-50">1234</h2>
                            </div>
                          </div>
                        </div>
                        <div className="bottom tickets mt-5">
                          <div className="offset-md-10 col-lg-2 col-12 mb-2">
                            <button className="dropdown-toggle service-dropdown pt-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="grey source p_lg">Select Year</p><i className="fas fa-chevron-down l-grey pr-1" />
                              </div>
                            </button>
                            <div className="dropdown-menu time-dropdown2" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(1213px, 134px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                              <a className="dropdown-item p-0" href="#_">
                                <p className="grey source p_lg">2020</p>
                              </a>
                              <a className="dropdown-item p-0" href="#_">
                                <p className="grey source p_lg">2019</p>
                              </a>
                              <a className="dropdown-item p-0" href="#_">
                                <p className="grey source p_lg">2018</p>
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-11 col-12 offset-xl-1">
                            <h5 className="black-text p_sm s-bold black chart-heading source f-30">Revenue Generated Per Month</h5>
                          </div>
                          <div className="chart-main position-relative">
                            <div className="row">
                              <div className="col-1">
                                <h4 className="chart-heading p_sm rotated-text revenuee source f-30">Revenue</h4>
                              </div>
                              <div className="col-11">
                                <div id="basic-area" className="height-400 echart-container" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 text-center">
                                <h3 className="chart-heading p_sm uppercase bold black">Months</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="black s-bold mt-1 source p_lg f-30">Activity Log</h3>
                        <div className="maain-tabble">
                          <table className="table table-striped table-bordered zero-configuration">
                            <thead>
                              <tr>
                                <th className="black bold">Activity</th>
                                <th className="black bold">Date</th>
                                <th className="black bold">Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                              <tr>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                <td>OCT 20, 2020</td>
                                <td>10:50 AM</td>
                              </tr>
                            </tbody>
                          </table>
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
  )




}

Dashboard.propTypes = {

}

const mapStateToProps = (state) => ({

  auth: state.auth,
  dashboard: state.dashboard

})

export default connect(mapStateToProps, {  logout })(withRouter(Dashboard))
