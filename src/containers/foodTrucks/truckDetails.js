import React,{useEffect,Fragment,useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import moment from 'moment'
import {Link,withRouter} from 'react-router-dom'

import { getTruckById } from '../../actions/truckActions';
import { ToastContainer } from 'react-toastify';



 const TruckDetail = ({ getTruckById, updateUser,truck: { Truck,loading }, auth, match,history }) => {
    const [update, setUpdate] = useState(false)


  



    useEffect(() => {
      getTruckById(match.params.id);
     
      }, [getTruckById, match.params.id]);



    
    return (
    

        
            <Fragment>
            
            {Truck !== null||Truck!=undefined ? (
              <Fragment>
            
            <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            <section id="configuration" className="trucker-detail">
              <div className="row">
                <div className="col-12">                      	    
                  <div className="card rounded pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="page-title">
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <h1><a onClick={()=>history.goBack()}><i className="fa fa-angle-left" /></a>Food Truck Details</h1>
                            </div>
                            <div className="col-12 col-sm-3 d-flex justify-content-sm-end">
                              <div className="paid-status">
                                <h6>Status:</h6>
                                <span className={`status ${Truck&&Truck.is_active?"active":"inactive"}`}><i className="fa fa-check-circle" />{Truck&&Truck.is_active?"Active":"InActive"}</span>
                              </div>
                            </div>    
                          </div>
                        </div>
                        <div className="user-detail-block">
                          <div className="user-name">
                            <div className="row">
                              <div className="col-lg-12 col-xl-11 col-12">
                                <div className="media d-md-flex d-block">
                                  <div className="media-left">
                                    <img src={"images/avatar.jpg"} className="img-fluid ml-0" alt="" />
                                  </div>
                                  <div className="media-body">
                                    <h3>{Truck.user?.firstname}</h3>
                                    <div className="user-info">
                                      <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-12 col-xl-5">
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">User Name:</div>
                                            <div className="col-12 col-md-6">{Truck.user&&Truck.user?.firstname}</div>
                                          </div>
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">User ID: </div>
                                            <div className="col-12 col-md-6">{Truck.user&&Truck.user?._id}</div>
                                          </div>
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">Email:</div>
                                            <div className="col-12 col-md-6">{Truck.user&&Truck.user?.email}</div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12 col-xl-5 offset-xl-1">
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">Truck Number:</div>
                                            <div className="col-12 col-md-6">{Truck&&Truck?.number}</div>
                                          </div>
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">Vehicle Reg No:</div>
                                            <div className="col-12 col-md-6">{Truck&&Truck.vehicle_registeration_plate}</div>
                                          </div>
                                          <div className="row detail-row">
                                            <div className="col-12 col-md-6 lablename">Web Link:</div>
                                            <div className="col-12 col-md-6">{Truck&&Truck.web_link}</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 col-md-11">
                                          <img src="images/detail-img.png" className="img-fluid ml-0" alt="" />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 col-md-11 discription">
                                          <h6>Truck Description:</h6>
                                          <p>{Truck&&Truck.description} </p>
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
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
     

              
              
            </Fragment>
            
        
    
        

    ):'<h1>Truck Details doesonot found</h1>'

}
</Fragment>

)
}

TruckDetail.propTypes = {
    updateProfile:PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  
  };


const mapStateToProps = (state) => ({
  truck:state.truck

  });
  
  export default connect(mapStateToProps, {getTruckById})(withRouter(TruckDetail));


               
