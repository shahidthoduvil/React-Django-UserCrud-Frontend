import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './AdminSidebar.css'
function AdminSidebar() {

    const history = useNavigate()
    const logout = () => {
        localStorage.removeItem('authToken')
        history('/login')

    }
    return (
        <div>

            
        </div>
    )
}

export default AdminSidebar