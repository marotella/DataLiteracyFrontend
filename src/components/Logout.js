import React from 'react';
import {useNavigate} from "react-router-dom"
import { clearToken } from '../services.js/auth';
const baseURL = process.env.REACT_APP_BASE_URL


const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        clearToken()
        console.log("Logout successful")
        navigate(`/users/login`)
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout