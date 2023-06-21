import React from 'react'
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import { useEffect } from 'react'
import login from '../helpers/auth';
import { updateAuthToken,updateUser } from '../redux/AuthContext';
import jwt_decode from "jwt-decode"
import { getLocal } from "../helpers/auth";
import { Toaster } from 'react-hot-toast';

const Login = () => {

    const history = useNavigate()
    const {user,authToken} = useSelector((state) => state.auth);
    const dispatch= useDispatch();
    const response = getLocal();
    
    useEffect(()=>{
      console.log(response);
      if (response) {
        history('/')
      }
    })


    const handleSubmit = async(e)=> {
        e.preventDefault()
        const response = await login(e);
        const decoded = jwt_decode(response.access)
        dispatch(updateUser(decoded));
        dispatch(updateAuthToken(response))
    }
  return (
    <div>

<div>
         <div class="registration-form">
         <Toaster position='top-center' reverseOrder='false' ></Toaster>
        <form onSubmit={handleSubmit}>
            <div class="form-icon">
                <span><i className="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" className="form-control item" id="email" name='email' placeholder="Email"
                 />
            </div>
            <div class="form-group">
                <input type="password" className="form-control item" name='password' id="password" placeholder="Password"
                />
            </div>
            <div class="form-group">
            <button  type='submit' className='btn btn-outline-primary'>Login</button>
            </div>
            <div className='signup-navi'>
            <p>Not yet registered..?</p>   
            <p><Link className='lo-sign' to='/signup'>SignUp</Link></p>
          </div>
        </form>
    </div>
    </div>
    
    </div>
  )
}

export default Login;