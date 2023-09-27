import React, {useState} from 'react';
import axios from axios

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response =await axios.post('/api/v1/users/login', loginData);
            const {token} = response.data
        } catch (error){
            console.error('Lopgin failed', error)
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htrmlFor="email">Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onchange={handleInputChange}
                    required
                />
                <label htmlFor="passsword">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
                />
                <button tpy="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;