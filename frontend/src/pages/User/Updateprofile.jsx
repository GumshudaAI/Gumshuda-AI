import React, { Fragment, useEffect, useState } from 'react'
import "../User/login.css"
import Loader from '../layouts/Loader'
import { useNavigate, Link } from 'react-router-dom';
import { clearErrors, loadUser, updateProfile } from '../../actions/userActions';
import { UPDATE_PROFILE_RESET } from '../../constants/userContants';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layouts/MetaData';
import { useAlert } from 'react-alert';


const Updateprofile = () => {
  
  const [ avatar, setAvatar ] = useState("");
  const [ avatarPreview, setAvatarPreview] = useState("images/default_avatar.jpg")

  const alert = useAlert();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useSelector(state => state.auth); // auth from store.js
  const { isUpdated, error, loading } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }
    if(isUpdated){
        alert.success("Update profile successfully")
        dispatch(loadUser());

          navigate("/me")

        dispatch({
            type : UPDATE_PROFILE_RESET
        })
    }

}, [dispatch, alert, isUpdated, error, navigate, user])

  const submitHandler = (e) => {
      e.preventDefault();

      const formData = new FormData();

formData.set('name', name);

formData.set('email', email);

formData.set('avatar', avatar);

var object = {};

formData.forEach((value, key) => object[key] = value);

var json = object

dispatch(updateProfile(json))
  }

  const onChange = (e) => {
          const reader = new FileReader();

          reader.onload = () => {
              if(reader.readyState === 2){
                  setAvatarPreview(reader.result);
                  setAvatar(reader.result)
              }
          }
          reader.readAsDataURL(e.target.files[0])
      }
   
  return (
    <div>
         <Fragment>
       { loading ?  <Loader/> : (
          <div className='loginparent'>
        <MetaData title={"Update profile"}/>

          <div className="login-page">
      <div className="formrm">
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <div>
          <div className='form-group'>
                            <div className='dflex align-items-center'>
                                <div>
                                    <figure className='avatar mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChange}
                                        
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                                </div>
                            </div>
                        </div>
          </div>
          <button>Update</button>
        </form>
      </div>
    </div>
        </div>
       )}  

    </Fragment>
    </div>
  )
}

export default Updateprofile
