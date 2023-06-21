import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { getLocal } from '../helpers/auth';
import jwt_decode from "jwt-decode";
import './Navbar.css'

function Navbar() {
    const { cartList } = useSelector((state) => state.cart)
    const totalCartCount = cartList.reduce((acc, value) => (acc += value.count),0);
    const { username } = jwt_decode(getLocal())
    const history = useNavigate()
    const { user, count } = useSelector((state) => state.auth);

    const logout = () => {
        localStorage.removeItem('authToken')
        history('/login')
    }

    return (
        <div>
            <nav class="navbar navbar-light bg-dark
             justify-content-between">
                <p class="navbar-brand"><Link className='nav-items' style={{ color: ' #65aeae' }} to='/'>Home</Link></p>
                <form class="form-inline">


                    <div className='right-section'>
                        <i className="fa-solid fa-cart-shopping" style={{ color: '#65aeae', position: 'relative' }}>
                            <div className="cart-counter-background" style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'rgb(255, 57, 143)', borderRadius: '50%', padding: '4px', color: '#fff', fontSize: '12px' }}>
                                {totalCartCount}
                            </div>
                        </i>
                    </div>



                    <Link to='user-profile' style={{ color: ' #65aeae' }}> <i class="fa fa-user mx-4"></i>{username}</Link>

                    {username && <button onClick={logout} className='logbtn' class="btn btn-outline-light my-2 my-sm-0 mx-2" type="submit" style={{ color: ' #65aeae' }}>LOGOUT</button>}

                </form>
            </nav>
        </div>
    )
}

export default Navbar