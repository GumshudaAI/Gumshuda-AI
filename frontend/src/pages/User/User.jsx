import React, { Fragment } from 'react'
import "./user.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import Loader from '../layouts/Loader';
import MetaData from '../layouts/MetaData';
const User = () => {
  const { user, loading } = useSelector(state => state.auth);
  const {  orders } = useSelector((state) => state.myOrders);


  return (
    <Fragment>
        { loading ? <Loader/> : (
             <div className='userparent'>
                <MetaData title={"Your profile"}/>
        
             <div className="first">
                         <h2 className="dflex headd" >My Profile</h2>
                 <div className="left">
                     <img  src={user.avatar && user.avatar.url} alt={user.name} width="100"/>
                 </div>
                 <div className="right">
                     <div className="info">
                         <div className="info_data">
                              <div className="data">
                                <h4 className='dflex'>Name</h4>
                                 <p className="dflex" >{user.name}</p>
                              <div className="data">
                                 <h4 className='dflex'>Email</h4>
                                 <p className="dflex" >{user.email}</p>
                              </div>
                           </div>
                         </div>
                         <button className="custom-btn btn-7"><span><Link to="/me/update" style={{textDecoration : "none", color : "black", fontSize : "small"}}>Update Profile</Link> </span></button>
                     </div>
                   
                   <div className="projects">
                         <div className="projects_data">
                              <div className="data">
                                 <h4 className='dflex'>Member since</h4>
                                 <p className="dflex" >{String(user.createdAt).substring(0, 10)}</p>
                              </div>
                              <div className="data">
                                <h4 className='dflex'>Total orders</h4>
                                 <p className="dflex" >{(orders.length)}</p>
                           </div>
                           <div className='dflex'>
                           <button className="custom-btn btn-7"><span><Link to="/me/update/password" style={{textDecoration : "none", color : "black"}}>Change Password</Link> </span></button>

                           </div>
                         </div>
                     </div>
                 </div>
             </div>

             <div className='second'>
           

          


             </div>


                 </div>
        )
}
           </Fragment>
        )    
}

export default User