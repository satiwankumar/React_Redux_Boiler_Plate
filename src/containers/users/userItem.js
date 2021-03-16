import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getSerial } from '../../utils/commonFunctions';
import moment from 'moment'
 const UserItem = ({user,index,currentPage,perPage, blockToggle,selection}) => {
    return (
    <Fragment>
      {user === null ? (
        <Spinner />
      ) : (
        <Fragment>
        
        <tr role="row" className="even">
                                      <td className="sorting_1">{getSerial(perPage,currentPage,index)}</td>
                                      <td>{user._id}</td>
                                      <td>{user.firstname+" "+ user.lastname}</td>
                                      <td>{moment(user && user.createdAt).format('Do MMMM YYYY')}</td>
                                      <td>{user.email}</td>
                                      <td>012 3456 789</td>
                                      <td>
                                        <div className="btn-group mr-1 mb-1">
                                          <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                          <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                                          <Link className="dropdown-item uppercase" to={`/viewuser/${user._id}`}><i className="fa fa-eye" />View</Link>
                                            {/* <a className="dropdown-item" href="edit-user-profile.html"><i className="fas fa-edit" />Edit</a> */}
                                            {selection==1?
                                    (<Link onClick={e => blockToggle(user._id,0)} className="dropdown-item uppercase" href="#_" data-toggle="modal" data-target="#blockuser"><i className="fa fa-ban" />
                                    
                                    Block</Link>):
                                    (
                                      <Link onClick={e => blockToggle(user._id,1)} className="dropdown-item uppercase" href="#_" data-toggle="modal" data-target="#blockuser"><i className="fa fa-ban" />
                                    
                                    unBlock</Link>
                                    )}
                                            
                                            <a className="dropdown-item" href="user-booking-log.html"><i className="fas fa-money-check" />User Booking Log</a>
                                            <a className="dropdown-item" href="user-payment-log.html"><i className="fas fa-file-alt" />User Payment Log</a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
        {/* <tr role="row" className="odd">
                              <td className="py-0 sorting_1">{getSerial(perPage,currentPage,index)}</td>
                              <td className="py-0">{user._id}</td>

                              <td className="py-0">{user.firstname+" "+ user.lastname}</td>
                              <td className="py-0">{moment(user && user.createdAt).format('Do MMMM YYYY')}</td>

                              <td className="py-0">{user.email}</td>

                              <td className="py-0">+1-541-754-3010</td>
                              <td className="py-0">
                                <div className="btn-group mr-1 mb-1">
                                  <button type="button" className="btn dropdown-toggle btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-v" /></button>
                                  <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', transform: 'translate3d(0px, 21px, 0px)', top: '0px', left: '0px', willChange: 'transform'}}>
                                    <Link className="dropdown-item uppercase" to={`/viewuser/${user._id}`}><i className="fa fa-eye" />View</Link>
                                    {selection==1?
                                    (<Link onClick={e => blockToggle(user._id,0)} className="dropdown-item uppercase" href="#_" data-toggle="modal" data-target="#blockUser"><i className="fa fa-ban" />
                                    
                                    Block</Link>):
                                    (
                                      <Link onClick={e => blockToggle(user._id,1)} className="dropdown-item uppercase" href="#_" data-toggle="modal" data-target="#blockUser"><i className="fa fa-ban" />
                                    
                                    unBlock</Link>
                                    )}
                                            <a className="dropdown-item" href="edit-user-profile.html"><i className="fas fa-edit" />Edit</a>
                                        <a className="dropdown-item" href="user-booking-log.html"><i className="fas fa-money-check" />User Booking Log</a>
                                            <a className="dropdown-item" href="user-payment-log.html"><i className="fas fa-file-alt" />User Payment Log</a>
                                  </div>
                                </div>
                              </td>
                            </tr> */}
       { 
       
       
       
 
 }
        
     
 


      
      </Fragment>
    )
      }
    </Fragment>
    )
}

UserItem.propTypes = {
 


};


export default connect(null, {})(UserItem);

