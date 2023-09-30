import React from 'react';
import {useHistory} from "react-router-dom"
import { clearToken } from '../services.js/auth';
const baseURL = process.env.REACT_APP_BASE_URL


const Logout = () => {
    const history = useHistory()

    const handleLogout = () => {
        clearToken()
        history.push(`${baseURL}/users/login`)
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout