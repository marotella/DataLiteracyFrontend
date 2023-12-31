import React, {useState} from 'react';
import axios from "axios"
import {register} from "../services.js/auth"

function Register(){
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await register(email, username, password)
        } catch (error){
            console.error('Registration failed', error)
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}> 
            <h1>Register</h1>
            <h3>Please register your information with Data Literacy to get started. If you need to log in please go to the log in page.</h3>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <label htmlFor="username">Username: </label>
            <input
                    type="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                </form>
        </div>
    )
}

export default Register