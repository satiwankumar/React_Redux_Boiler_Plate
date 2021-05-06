import React, { useEffect, Fragment, useState } from 'react'
import { Link, withRouter, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDashboard } from '../../actions/dashboardRoutes'
import { Bar } from "react-chartjs-2";
import { logout } from '../../actions/authAction'


const Dashboard = ({ getDashboard, logout, dashboard: { Dashboard } }) => {
  useEffect(() => {

    getDashboard()
  }, [getDashboard])


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    datasets: [
      {
        label: 'No of Users',
        data: Dashboard&&Dashboard.analytics?.data,
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

  return (
    <div>
         <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="row">
                <div className="col-12">
                  <div className="card rounded pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body card-dashboard">
                        <div className="row">
                          <div className="col-12">
                            <h1>Dashboard</h1>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-5 col-xl-4  d-flex">
                            <div className="card">
                              <div className="card-content">
                                <div className="card-title">Total Users</div>
                                <div className="card-body">
                                  <div className="media d-flex align-items-stretch">
                                    <div className="media-body text-left align-self-center">
                                      <h3>{Dashboard&&Dashboard.totalUsers}</h3>
                                    </div>
                                    <div className="align-self-center">
                                      <i className="card-icon float-right"><img src="images/icon-users.png" alt="avatar" /></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>							
                          </div>
                          <div className="col-12 col-md-6 col-lg-5 col-xl-4  d-flex">
                            <div className="card">
                              <div className="card-content">
                                <div className="card-title">Total Trucks</div>
                                <div className="card-body">
                                  <div className="media d-flex align-items-stretch">
                                    <div className="media-body text-left align-self-center">
                                      <h3>{Dashboard&&Dashboard.totalTrucks}</h3>
                                    </div>
                                    <div className="align-self-center">
                                      <i className="card-icon float-right"><img src="images/icon-truck.png" alt="avatar" /></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>							
                        <div className="bottom tickets">
                          <div className="row">
                            <div className="col-6 text-left">
                              <h2>Total Users per Month</h2>
                            </div>
                            <div className="col-6 text-right">
                              <select name id>
                                <option value>Select Year</option>
                                <option value>{new Date().getFullYear()}</option>
                                <option value>{new Date().getFullYear()-1}</option>
                                <option value>{new Date().getFullYear()-2}</option>
                               
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-2 text-center">
                              <h2>Graph Title</h2>
                            </div>
                          </div>
                          <div className="chart-main position-relative">
                        
                          <Bar data={data} options={options}/>
a                          </div>
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
  </div>
  )




}

Dashboard.propTypes = {

}

const mapStateToProps = (state) => ({

  auth: state.auth,
  dashboard: state.dashboard

})

export default connect(mapStateToProps, { getDashboard, logout })(withRouter(Dashboard))
