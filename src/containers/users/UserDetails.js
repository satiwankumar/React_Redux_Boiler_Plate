import React,{useEffect,Fragment,useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import moment from 'moment'
import {Link,withRouter} from 'react-router-dom'

import { getCurrentProfile,getUserById,updateUser } from '../../actions/profileAction';
import { ToastContainer } from 'react-toastify';



 const EditUser = ({ getUserById, updateUser,profile: { profile,loading }, auth, match,history }) => {
    const [update, setUpdate] = useState(false)


    const [formData,setFormData] = useState({
      _id:'',
        firstname:'',
        lastname:'',
        email:'',
        phone_no:'',
        createdAt:'',
        status:'',
        image:''
 
    });
    const {firstname,lastname,email,phone_no,createdAt,_id,status,image} = formData




    useEffect(() => {
      getUserById(match.params.id);
     
      }, [getUserById, match.params.id]);




      useEffect(() => {
      
        if(profile!==null){
          setFormData({
            firstname: loading || !profile.firstname? '' : profile.firstname,
            lastname: loading || !profile.lastname ? '' : profile.lastname,
            email:loading || !profile.email ? '' : profile.email,
            phone_no:loading || !profile.phone_no ? '' : profile.phone_no,
            createdAt:loading || !profile.createdAt ? '' : profile.createdAt,
            _id:loading || !profile._id ? '' : profile._id,
            status:loading || !profile.status ? '' : profile.status,
            image:loading || !profile.image ? '' : profile.image,
            

  
          });
        }
  
     

      }, [loading,profile]);

    
    const onchange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})

    }

  
    const onSubmit= (e)=>{
        e.preventDefault()
        // console.log("firstname,lastname")
        
        updateUser(match.params.id,firstname,lastname,phone_no,history)
     

    }


    
    return (
    

        
            <Fragment>
            
            {profile !== null||profile!=undefined ? (
              <Fragment>
            
            <div className="app-content dashboard content">
        <div className="content-wrapper">
          <div className="content-body">
            <section id="configuration">
              <div className="row">
                <div className="col-12">                      	    
                  <div className="card rounded pad-20">
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="page-title">
                          <div className="row">
                            <div className="col-12 col-sm-9">
                              <h1><a onClick={()=>history.goBack()}><i className="fa fa-angle-left" /></a>User Details</h1>
                            </div>
                            <div className="col-12 col-sm-3 d-flex justify-content-sm-end">
                              <div className="paid-status">
                                <h6>Status:</h6>
                                <span className={`status ${status==1?"active":"inactive"}`}><i className="fa fa-check-circle" />{status==1?"Active":"Inactive"}</span>
                              </div>
                            </div>    
                          </div>
                        </div>
                        <div className="user-detail-block">
                          <div className="user-name">
                            <div className="row">
                              <div className="col-xl-11 col-12">
                                <div className="media d-sm-flex d-block">
                                  <div className="media-left">
                                    <img src={image?image:"images/avatar.jpg"} className="img-fluid ml-0" alt="" />
                                  </div>
                                  <div className="media-body">
                                    <h3>Mark Carson</h3>
                                    <div className="user-info">
                                      <div className="row detail-row d-flex align-items-center">
                                        <div className="col-12 col-md-6 col-lg-4 lablename">User Name:</div>
                                        <div className="col-12 col-md-6 col-lg-4">{firstname}</div>
                                      </div>
                                      <div className="row detail-row d-flex align-items-center">
                                        <div className="col-12 col-md-6 col-lg-4 lablename">User ID:</div>
                                        <div className="col-12 col-md-6 col-lg-4">{_id}</div>
                                      </div>
                                      <div className="row detail-row d-flex align-items-center">
                                        <div className="col-12 col-md-6 col-lg-4 lablename">Email:</div>
                                        <div className="col-12 col-md-6 col-lg-4">{email}</div>
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
            
        
    
        

    ):'<h1>user Details doesonot found</h1>'

}
</Fragment>

)
}

EditUser.propTypes = {
    updateProfile:PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  
  };


const mapStateToProps = (state) => ({
    auth: state.auth,
    profile:state.profile

  });
  
  export default connect(mapStateToProps, {updateUser,getUserById,getCurrentProfile })(withRouter(EditUser));


               
