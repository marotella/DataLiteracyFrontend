import React, {useState} from 'react';
import axios from "axios"
import {login} from "../services.js/auth"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {token} = await login(username, password)
            console.log("Login successful")
        } catch (error){
            console.error('Login failed', error)
        }
    }
    return(
        <div>
            <h1>Log In</h1>
            <h3>Enter your username and password in the fields below to get started.</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;