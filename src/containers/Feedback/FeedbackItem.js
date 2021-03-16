import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UpdateUserStatus } from '../../actions/profileAction';
import Spinner from '../layout/Spinner';
import { ToastContainer } from "react-toastify";
import {getSerial} from '../../utils/commonFunctions'
import moment from 'moment'
 const FeedbackItem = ({data,index,perPage,currentPage, handleDelete,selection}) => {
    return (
    <Fragment>
      {data === null ? (
        <Spinner />
      ) : (
        <Fragment>
          
        <tbody>
        <tr role="row" className="odd">
                                        <td className="sorting_1">{getSerial(perPage,currentPage,index)}</td>
                                      <td>{data.user &&data.user._id}</td>
                                      <td>{data.user &&data.user.firstname+ " "+data.user.lastname}</td> 
                                      <td>{moment(data && data.createdAt).format('Do MMMM YYYY')}</td>
                                      <td>
                                        <div className="btn-group mr-1 mb-1">
                                          <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                          <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                                          <Link className="dropdown-item uppercase" to={`/feedbackdetails/${data._id}`}><i className="fa fa-eye" />View</Link>

                                          </div>
                                        </div>
                                      </td>
                                    </tr>
        
        
     
      </tbody>


      
      </Fragment>
    )
      }
    </Fragment>
    )
}

FeedbackItem.propTypes = {
 
  // UpdateUserStatus:PropTypes.func.isRequired
  


};


export default connect(null, {})(FeedbackItem);

