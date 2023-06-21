
import React, {useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import './AddUser.css'

function AddUser() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    const handleSubmit= async (e) => {
        e.preventDefault()

        const user = await fetch('http://localhost:2000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })

        await history('/')
    }
    return (
        <div className="form-container">
      <form className="add-user-form" onSubmit={handleSubmit}>
        <h2>Add New User Here</h2>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input className="add-user-button" type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
}

export default AddUser