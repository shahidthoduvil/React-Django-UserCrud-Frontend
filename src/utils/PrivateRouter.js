import React from "react";
import HomePage from "../pages/HomePage";
import { getLocal } from "../helpers/auth";
import jwt_decode from "jwt-decode"
import AdminPanelPage from "../pages/AdminPanelPage";
import SigninPage from "../pages/SigninPage";



const PrivateRoute = ({ children, ...rest }) => {
    const response = getLocal('authToken');

    if (response) {
        const decoded = jwt_decode(response)

        if (decoded.is_admin) {
            console.log('admin');
            return (
                <div>
                 <AdminPanelPage /> 
              
                </div >
                )
        } 
        else if (!decoded.is_admin) {
                return <HomePage />
}
    }
    else {
    console.log('no token');
    return <SigninPage />
}
   

 
}

export default PrivateRoute;