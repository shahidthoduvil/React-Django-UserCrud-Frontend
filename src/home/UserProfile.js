import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import axios from 'axios';
import { getLocal } from '../helpers/auth';
import jwt_decode from 'jwt-decode';
import profile from '../images/profile.png';
import { useNavigate, useParams } from 'react-router-dom'

function UserProfile() {
    const { user_id } = jwt_decode(getLocal());
    const [profile_img, setProfileImage] = useState(null);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState({
        username: '',
        email: '',
        profile_img: '',
    });
    const history = useNavigate()

    const id = useParams();


    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(`http://localhost:2000/api/user-details/${user_id}/`);
         
                setUser(response.data);
               
            } catch (error) {
                console.error('Failed to fetch user details:', error);
            }
        }
        getUser();
    }, [user_id]);




    const updateProfile = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('profile_img', profile_img);

        try {
            const response = await axios.put(`http://localhost:2000/api/user-update/${user_id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set the content type for form data
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            }).then(history('/'))
           
            setUser(response.data);
            console.log('Image updated successfully');
        } catch (error) {
            console.error('Failed to update profile image:', error);
        }
    };

    


    return (
        <div>
            <div className="container my-4 py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white">
                                    <img
                                        src={user.profile_img ? `http://localhost:2000${user.profile_img}` : profile}
                                        alt="Avatar"
                                        className="img-fluid my-5"
                                        style={{ width: '80px' }}
                                    />
                                    <h5>{user.username}</h5>
                                    <p>Web Designer</p>
                                    <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i className="far fa-edit mb-5 btn btn-outline-dark"></i>
                                    </button>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{user.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">9936635316</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <form onSubmit={updateProfile}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Update Profile Image</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="file"
                                    name="profile_img"
                                    onChange={e => setProfileImage(e.target.files[0])}
                                />
                               

                                <input type="submit" className="img-upload" value="Upload Image" />
                               
                                <div className='form-contain' >
                                    
                                      
                                        <input className='add-user-input' type="text" name='username' placeholder='username' 
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                       
                                        {/* value={singleUser.username} value={singleUser.email} */}
                                        <input className='add-user-input' type="email" name='email' placeholder='email' 
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                       
                                        <input className='add-user-input' type="password" name='password' placeholder='password'
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                      
                                        <input className='add-user-button' type="submit" value='Update' />
                                    
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                              
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
}

export default UserProfile;
