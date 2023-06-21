import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { toast } from "react-hot-toast";
import './Signup.css'



function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  const signupSubmit = (e) => {
    e.preventDefault()
    console.log('sht7j7utf7uus7fm7j');
    const response = fetch('http://localhost:2000/api/register', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    console.log(response);
    if (response.status === 400) {
      toast.error('Enter some details')
      history('/signup')
    } else {
      history('/login')
    }

  }



  return (
    <div>
      <div class="registration-form">
        <Toaster position='top-center' reverseOrder='false' ></Toaster>
        <form onSubmit={signupSubmit} >
          <div class="form-icon">
            <span><i  class="icon icon-user"></i></span>
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="username" placeholder="Username"
              onChange={e => setUsername(e.target.value)} />
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="email" placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="form-group">
            <input type="password" class="form-control item" id="password" placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div class="form-group">
              <button  type='submit' className='btn btn-outline-primary'>Signup</button>
          </div>
          <div className='signup-navi'>
            <p>Already a member..?</p>
            <p><Link className='lo-sign' to='/login'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>




  )
}

export default Signup