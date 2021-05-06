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
               <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            <section id="configuration" className="feedback-detail">
              <div className="row">
                <div className="col-12">                      	    
                  <div className="card rounded pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="page-title">
                          <div className="row">
                            <div className="col-12">
                              <h1><a onClick={()=>history.goBack()}><i className="fa fa-angle-left" /></a>Feedback Details</h1>
                            </div>   
                          </div>
                        </div>
                        <div className="user-detail-block">
                          <div className="user-info">
                            <div className="row detail-row">
                              <div className="col-12 col-md-3 lablename">User Name:</div>
                              <div className="col-12 col-sm-8">{Feedback&&Feedback.user?.name}</div>
                            </div>
                            <div className="row detail-row">
                              <div className="col-12 col-md-3 lablename">Email:</div>
                              <div className="col-12 col-sm-8">{Feedback&&Feedback.email?.email}</div>
                            </div>
                            <div className="row detail-row">
                              <div className="col-12 col-md-3 lablename">User Type: </div>
                              <div className="col-12 col-sm-8">{Feedback&&Feedback.user?.role}</div>
                            </div>
                            <div className="row detail-row">
                              <div className="col-12 col-md-3 lablename">Subject:</div>
                              <div className="col-12 col-sm-8">
                                {Feedback&&Feedback.subject} </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-md-11 discription">
                                <h6>Message:</h6>
                                <p>{Feedback&&Feedback.message} </p>
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
