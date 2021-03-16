import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getFeedbackById } from '../../actions/feedbackAction';



 const FeedbackDetails = ({ getFeedbackById,feedbacks:{loading,Feedback},match,history}) => {
   console.log("userID",match.params.id)
  useEffect(() => {
  //  console.log(match.params.id)

  getFeedbackById(match.params.id);
  }, [getFeedbackById, match.params.id]);

     

        return (
          <Fragment>
            {Feedback === null ? (
              <Spinner />
            ) : (
              <Fragment>
                
      <section className="admin-profile">
        <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-body">
              {/* Basic form layout section start */}
              <section id="configuration user-management">
                <div className="row">
                  <div className="col-12">
                    <div className="card jost pad-20 pb-5 px-lg-4 px-2">
                      <div className="card-content collapse show">
                        <div className="card-body table-responsive card-dashboard">
                          <a onClick={()=>history.goBack()} ><h1 className="pull-left source d-pur f-32 s-bold mt-2"><i className="fas fa-arrow-left" /> Feedback</h1></a>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-12">
                              <h4 className="refundedheading source s-bold">Feedback Details</h4>
                            </div>
                          </div>
                          <div className="dash-card-inner mt-2 ml-lg-5 ml-1">
                            <div className="row mt-46">
                              <div className="col-lg-3 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">User ID</p>
                                <p className="jost medium black p_lg">{Feedback._id}</p>
                              </div>
                              <div className="col-lg-4 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">Username</p>
                                <p className="jost medium black p_lg">{Feedback.user.firstname + " "+Feedback.user.firstname}</p>
                              </div>
                            </div>
                            <div className="row mt-46">
                              <div className="col-lg-3 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">User Email Address</p>
                                <p className="jost medium black p_lg">{Feedback.user.email}</p>
                              </div>
                              <div className="col-lg-4 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">Subject</p>
                                <p className="jost medium black p_lg">{Feedback.subject}</p>
                              </div>
                            </div>
                            <div className="row mt-46">
                              <div className="col-lg-9 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">Message</p>
                                <p className="jost medium black p_lg" style={{lineHeight: '23px'}}>{Feedback.message}</p>
                              </div>
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
      </section>
              </Fragment>
            )}
          </Fragment>
        );
      };
    
      FeedbackDetails.propTypes = {
  getFeedbackById: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  feedbacks: state.feedback

  
});

export default connect(mapStateToProps, { getFeedbackById })(FeedbackDetails);
