import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { toast } from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import Swal from 'sweetalert2'
import './AdminSidebar.css'




function AdminPanel() {
    const [userList, setUserList] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const { user_id } = useParams();
    
    const [singleUser, setUser] = useState({
        username: '',
        email: ''
    })

    useEffect(() => {

        async function getUserList() {
            const response = await axios.get('http://localhost:2000/api/class-userlist/')
            setUserList(response.data)
        }
        getUserList();

    }, [])

const userUpdateForm = async (e) => {
  e.preventDefault();

  const updatedUser = {
    username,
    email,
    password
  };

  try {
    await axios.post(`http://localhost:2000/api/user-update/${user_id}/`, updatedUser);
    toast.success('User updated successfully');
    history.push('/user-profile');
  } catch (error) {
    console.error('Failed to update user:', error);
    toast.error('Failed to update user');
  }
};

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const user = axios.delete(`http://localhost:2000/api/user-delete/${id}/`).then(
                    async function getUserList() {
                        const request = await axios.get('http://localhost:2000/api/user-list/')

                        setUserList(request.data)
                    }
                )

            }
        })
    }

    async function serachUser(keyword) {
        const request = await axios.get(`http://localhost:2000/api/class-userlist/?search=${keyword}`)
        console.log(request.data);
        if (request.data.length === 0) {

        }
        setUserList(request.data)
    }

    return (
        <div>
            <div class="admin-container">
                <div class="admin-sidebar">
                    <div class="sidebar-header">
                        <h3>Admin Panel</h3>
                    </div>
                    <ul class="sidebar-menu">
                        <li><Link to='add-user'>Add User</Link></li>

                    </ul>
                </div>
                <div class="admin-content">
                    <div class="admin-table">
                        <Toaster position='top-center' reverseOrder='false' ></Toaster>
                        <div class="search-bar">
                            <input onChange={e => serachUser(e.target.value)} type="search" class="search-input" id="datatable-search-input" placeholder="Search..." />
                            <button class="search-button" type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <table class="table table-bordered my-4 " >
                            <caption></caption>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th className='action-col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map((user) => (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                            <p className='delete  mx-4' onClick={() => handleDelete(user.id)}> <i class="fa fa-trash" aria-hidden="true"></i></p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form className="add-user-form" onSubmit={userUpdateForm}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username"
                                        value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="
                               email" placeholder="Enter email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-warning">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>










    )
}

export default AdminPanel