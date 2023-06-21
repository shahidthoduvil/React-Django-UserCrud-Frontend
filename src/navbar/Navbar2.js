import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { getLocal } from '../helpers/auth';
import jwt_decode from "jwt-decode";

function Navbar2() {
  
    const { username } = jwt_decode(getLocal())
    const history = useNavigate()
    const { user, count } = useSelector((state) => state.auth);

    const logout = () => {
        localStorage.removeItem('authToken')
        history('/login')
    }

    return (
        <div class='navContainer'>
            <nav class="navbar navbar-light top-fixed bg-dark justify-content-between">
                <p class="navbar-brand" style={{color:'#f4ce51'}}><Link className='nav-items' style={{color:'#f4ce51'}} to='/'>Admin</Link></p>
               
                <form class="form-inline">
                    <i class="bi bi-person"></i>


                    {username && <button onClick={logout} class="btn btn-outline-warning my-2 my-sm-0" type="submit">LOGOUT</button>}
               
                  
                    
                    <Link to='user-profile'  style={{color:'#f4ce51'}}> <i class="fa fa-user mx-4  warning"></i>{username}</Link>
               

                </form>
            </nav>
        </div>
    )
}

export default Navbar2