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
      
        firstname:'',
        lastname:'',
        email:'',
        phone_no:'',
        createdAt:''
 
    });
    const {firstname,lastname,email,phone_no,createdAt} = formData




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
            createdAt:loading || !profile.createdAt ? '' : profile.createdAt

  
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
                          <a onClick={()=>history.goBack()}><h1 className="pull-left source d-pur f-32 s-bold mt-2"><i className="fas fa-angle-left" /> {update?"Edit User Profile": "User Profile"}</h1></a>
                          <div className="clearfix" />
                          <div className="dash-card-inner mt-2">
                            <div className="d-flex align-items-center justify-content-center mt-lg-3 mt-0">
                              <img src="images/user-icon.png" alt="" className="img-fluid" />
                              <label htmlFor="picture">
                                <i className="fas fa-camera profile-pic-icon" />
                              </label>
                              <form style={{display: 'none'}}>
                                <input type="file" name="pic" accept=".gif,.jpg,.png,.tif|image/*" id="picture" />
                                <input type="submit" />
                              </form>
                            </div>
                            <form onSubmit={(e)=>onSubmit(e)}>
                            <div className="row mt-2">
                                              <div className="col-lg-4 col-12 offset-lg-2 mt-0">
                                <p className="jost medium black p_lg mb-1">First Name</p>
                                <input type="text" className="form-control" value={firstname}  name="firstname"  value={firstname} onChange={(e)=>{onchange(e)}} defaultValue="Mark" disabled={!update?"true":""} required />                          
                              </div>
                              <div className="col-lg-4 col-12 mt-lg-0 mt-1">
                                <p className="jost medium black p_lg mb-1">Last Name</p>
                                <input type="text" className="form-control"  name="lastname"  value={lastname} onChange={(e)=>{onchange(e)}}  defaultValue="Carson" disabled={!update?"true":""} required />  
                              </div>
                            </div>
                            <div className="row mt-lg-2 mt-1">
                              <div className="col-lg-4 col-12 offset-lg-2 mt-lg-0 mt-1">
                                <p className="jost medium black p_lg mb-1">Phone Number</p>
                                <input type="text" className="form-control"  name="phone_no"  value={phone_no} onChange={(e)=>{onchange(e)}} disabled={!update?"true":""} defaultValue="+012 3456 789" />                          
                              </div>
                              <div className="col-lg-4 col-12 mt-lg-0 mt-1">
                                <p className="grey source s-bold p_lg">Email Address</p>
                                <p className="jost medium black p_lg">{profile.email}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 text-center">
                      {
                        !update?
                        <a onClick={()=>setUpdate(true)} ><button className="mt-46">Update</button></a>:
                        <a ><button type="submit" className="mt-46">save</button></a>

                      }

                              </div>
                            </div>
                            </form>
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

        <ToastContainer autoClose={3000}/>
      </section>

              
              
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


               
